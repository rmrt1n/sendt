<script>
	export let subject, options, selectedOption;

	let mailto = '',
		email = '';

	$: mailto = `mailto:${email}?subject=${subject}&body=${encodeURI(options[selectedOption])}`;
</script>

<div class="">
	<h2 class="font-bold text-lg mb-2">Send to recruiter</h2>
	<div class="font-bold flex justify-between border">
		<input
			type="email"
			placeholder="Recruiter email"
			bind:value={email}
			class="text-lg outline-none border-b text-gray-500 p-2"
		/>
		<a href={mailto} class="btn">Email</a>
	</div>
</div>
