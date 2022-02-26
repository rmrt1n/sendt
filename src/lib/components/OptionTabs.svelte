<script>
	export let options, selectedOption;

	/* let textarea; */
	let isDisabled = true;

	const edit = () => {
		isDisabled = !isDisabled;
		if (isDisabled) return;

		// for some reason only this works. tried bind:this & reference array
		const len = options.length - selectedOption - 1;
		let textarea = document.getElementsByTagName('textarea')[len];

		const end = textarea.value.length;
		textarea.setSelectionRange(end, end);
		setTimeout(() => textarea.focus(), 50);
	};
</script>

<div>
	<!-- tabs -->
	<div class="flex justify-between">
		<!-- tabs -->
		<div class="flex">
			{#each options as _, i}
				<div
					class="p-4 border cursor-pointer"
					class:text-blue-600={selectedOption === i}
					class:font-bold={selectedOption === i}
					class:bg-gray-100={selectedOption !== i}
					class:text-gray-500={selectedOption !== i}
					on:click={() => {
						isDisabled = true;
						selectedOption = i;
					}}
				>
					Option {i + 1}
				</div>
			{/each}
		</div>

		<!-- edit -->
		<button class="btn px-4 py-1 m-2" on:click={edit}>{isDisabled ? 'edit' : 'done'}</button>
	</div>

	<!-- tab bodies -->
	{#each options as o, i}
		<div class:hidden={selectedOption === i}>
			<textarea
				value={o}
				class="h-72 w-full resize-none border p-4 outline-none"
				disabled={isDisabled}
			/>
		</div>
	{/each}
</div>
