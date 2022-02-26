<script context="module">
	export const load = async ({ fetch, params }) => {
		const response = await fetch(`/api/templates/${params.template}.json`);
		return {
			status: response.status,
			props: {
				template: response.ok && (await response.json())
			}
		};
	};
</script>

<script>
	import OptionTabs from '$lib/components/OptionTabs.svelte';
	import TemplateInput from '$lib/components/TemplateInput.svelte';
	import Mailto from '$lib/components/Mailto.svelte';

	export let template;

	let vars = { name: '' };
	let isAnswered = false;
	let { options } = template;
	let selectedOption = 0;

	const onChange = (e) => {
		vars[e.target.id] = e.target.value;
	};

	const replace = (str) => {
		let dup = str;
		for (let k in vars) {
			dup = dup.replace(new RegExp(`%${k}%`, 'g'), vars[k]);
		}
		dup = dup.replace(new RegExp(`%recruiter%`, 'g'), 'Hiring Manager');
		return dup;
	};

	const answer = () => {
		template.subject = replace(template.subject);
		options = options.map((e) => replace(e));
		isAnswered = true;
		// scroll to bottom
		setTimeout(() => {
			window.scrollTo(0, document.body.scrollHeight);
		}, 100);
	};
</script>

<div class="p-8 flex flex-col items-center justify-center">
	<div class="w-full md:w-4/5">
		<div class="md:border md:shadow-lg space-y-4 p-10">
			<h1 class="text-3xl font-bold mt-4  text-center">{template.title}</h1>
			<p class="text-lg text-gray-500 text-center px-16 pb-10">
				{template.desc}. Fill up the form below to generate your emails. Don't forget to attach the
				necessary files such as your resume and/or cover letter as we can't do it for you!
			</p>
			<!-- inputs -->
			<form on:submit|preventDefault={answer}>
				{#each template.variables as v}
					<TemplateInput variable={v} on:change={onChange} />
				{/each}

				<!-- generate btn -->
				{#if template.variables.length}
					<div class="text-xl font-bold flex justify-center">
						<button type="submit" class="my-8 btn">Generate</button>
					</div>
				{:else}
					<h2 class="text-2xl text-gray-500 text-center">Coming soon!</h2>
				{/if}
			</form>

			<!-- tabs -->
			{#if isAnswered}
				<br />
				<OptionTabs {options} bind:selectedOption />
				<Mailto subject={template.subject} bind:options bind:selectedOption />
			{/if}
		</div>
	</div>
</div>
