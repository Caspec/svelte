<script lang="ts">
import Header from './ui/Header.svelte';
import Footer from './ui/Footer.svelte';
import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<style>
	:global(body) {
		font-family: Arial, sans-serif;
		margin: 0;
		padding: 0;
		background-color: #f0f0f0;
	}
	main {
    padding: 20px;
    background-color: #f0f0f0;
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<Header />
<main>
    <Router {routes} />
</main>
<Footer />