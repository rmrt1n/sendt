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
	import Features from '$lib/components/Features.svelte';
	import { slugify } from '$lib/utils';

	export let templates;
</script>

<div class="md:h-[40rem] flex flex-col items-center md:flex-row md:justify-between p-8">
	<div class="p-4 flex flex-col justify-center">
		<h1 class="text-5xl md:text-7xl font-bold mb-4">Sendt</h1>
		<h2 class="text-xl md:text-3xl text-gray-500">
			Professional email templates for any job situation
		</h2>
	</div>
	<div class="text-right">
		<img src="/hero.jpg" alt="man finding jobs" class="max-h-[32rem]" />
		<a href="https://www.freepik.com/vectors/technology" class="text-xs text-gray-500 mr-6">
			Technology vector created by jcomp - www.freepik.com
		</a>
	</div>
</div>

<div class="md:h-[36rem] flex flex-col items-center justify-center p-10">
	<h1 class="text-4xl font-bold mb-8">Features:</h1>
	<Features />
</div>

<div class="md:h-[36rem] flex flex-col p-10 items-center">
	<h1 class="text-4xl font-bold mb-8">Explore our templates:</h1>
	<div class="flex flex-col md:grid md:grid-cols-3 gap-10">
		{#each templates.categories[0].templates.slice(0, 3) as i}
			<a href={`/templates/${slugify(i.title)}`}>
				<div class="box p-8 lg:w-72 h-72 bg-blue-600 text-white hover:cursor-pointer">
					<h1 class="text-2xl font-bold mb-2">{i.title}</h1>
					<p class="text-lg">{i.desc}</p>
				</div>
			</a>
		{/each}
		<a
			href="/templates"
			class="col-span-3 text-xl font-bold text-right text-blue-600 hover:underline">View More...</a
		>
	</div>
</div>

<style>
	.box:hover h1 {
		text-decoration: underline;
	}
</style>
