<script context="module">
	export const load = async ({ fetch }) => {
		const response = await fetch('/api/templates.json');
		return {
			status: response.status,
			props: {
				templates: response.ok && (await response.json())
			}
		};
	};
</script>

<script>
	import CategorySection from '$lib/components/CategorySection.svelte';

	export let templates;

	const { categories } = templates;
</script>

{#each categories as c}
	<CategorySection category={c} />
{/each}
