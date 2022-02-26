<script context="module">
	export const load = async ({ status }) => {
		return {
			props: { status }
		};
	};
</script>

<script>
	export let status;
</script>

{#if status === 404}
	<div class="flex flex-col items-center justify-center mt-40 p-8 space-y-4">
		<h1 class="text-9xl font-black text-blue-600">{status}</h1>
		<p class="text-4xl font-bold">Oops! Something went wrong</p>
		<a href="/" class="btn">Go back</a>
	</div>
{/if}
