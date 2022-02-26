<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="relative min-h-screen">
	<Navbar />
	<slot />
</div>
