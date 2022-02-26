<script>
	import { slugify } from '$lib/utils';
	export let category;
</script>

<div class="md:h-80 hover:bg-gray-50 p-8 flex flex-col">
	<h1 class="text-3xl font-bold mb-2">{category.name}</h1>
	<div class="grid md:grid-cols-3 gap-2 h-full">
		{#if !category.templates.length}
			<h1 class="text-xl text-gray-500">Coming soon!</h1>
		{/if}
		{#each category.templates.slice(0, 3) as i}
			<a href={`/templates/${slugify(i.title)}`}>
				<div class="box py-4 w-64 hover:text-blue-600 hover:cursor-pointer">
					<h1 class="text-2xl font-bold mb-2">{i.title}</h1>
					<p class="text-lg text-gray-500">{i.desc}</p>
				</div>
			</a>
		{/each}
	</div>
	<a href="#" class="text-lg font-bold text-blue-600 text-right hover:underline">View More...</a>
</div>

<style>
	.box:hover h1 {
		text-decoration: underline;
	}
</style>
