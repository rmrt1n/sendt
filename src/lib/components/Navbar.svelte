<script>
	const sections = [
		{ name: 'Home', url: '/' },
		{ name: 'Templates', url: '/templates' },
		{ name: 'About', url: '/about' }
	];
	let isHidden = true;
</script>

<div
	class="w-full bg-white flex items-center justify-between px-4 py-2 border"
	class:shadow-md={isHidden}
	class:border={isHidden}
>
	<a href="/" class="text-2xl font-bold">Sendt</a>

	<nav class="space-x-4 hidden sm:flex">
		{#each sections as s}
			<a href={s.url} class="hover:text-blue-600 px-4 py-3 font-bold">{s.name}</a>
		{/each}
	</nav>

	<div class="sm:hidden flex items-center">
		<button
			class="outline-none mobile-menu-button p-3 hover:bg-blue-600 hover:text-white"
			on:click={() => (isHidden = !isHidden)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2.5"
					d={isHidden ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
				/>
			</svg>
		</button>
	</div>
</div>
<div class="flex flex-col border-b shadow-md" class:hidden={isHidden}>
	{#each sections as sect}
		<a href={sect.url} class="font-bold hover:bg-blue-600 hover:text-white px-4 py-3">{sect.name}</a
		>
	{/each}
</div>
