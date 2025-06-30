<script lang="ts">
import Header from './ui/Header.svelte';
import MainContent from './ui/MainContent.svelte';
import Footer from './ui/Footer.svelte';
</script>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		background-color: #f0f0f0;
	}
</style>

<Header />
<MainContent />
<Footer />