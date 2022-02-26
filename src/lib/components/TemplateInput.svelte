<script>
	export let variable;
</script>

<div class=" flex flex-col px-24 mb-8">
	<label for={variable.name} class="text-xl">{variable.desc}: </label>
	<input
		on:change
		required={variable.name !== 'recruiter'}
		id={variable.name}
		class="text-lg outline-none border-b-2 text-gray-500 pb-1"
	/>
</div>
