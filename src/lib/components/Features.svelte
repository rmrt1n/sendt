<script>
	import Heart from './icons/Heart.svelte';
	import Briefcase from './icons/Briefcase.svelte';
	import Lightbulb from './icons/Lightbulb.svelte';

	const features = [
		{
			title: 'Quick & Easy to Use',
			icon: Heart,
			desc: 'Answer simple questions and get your email generated without much work.'
		},
		{
			title: 'Your Specific Usecase',
			icon: Briefcase,
			desc: 'We have templates for different stages of the job application process.'
		},
		{
			title: 'Smart Suggestions',
			icon: Lightbulb,
			desc: 'Get similiar job reccomendations after sending your mail.'
		}
	];
</script>

<div class="grid md:grid-cols-3 md:gap-20 md:border md:shadow-md">
	{#each features as f}
		<div class="lg:w-72 lg:h-72 flex flex-col items-center p-4">
			<div class="text-blue-600 my-4">
				<svelte:component this={f.icon} />
			</div>
			<h1 class="font-bold text-2xl text-center mb-2">{f.title}</h1>
			<p class="text-lg md:text-base text-gray-500 text-center">{f.desc}</p>
		</div>
	{/each}
</div>
