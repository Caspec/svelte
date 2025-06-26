<script lang="ts">
	import ContactCard from "./ContactCard.svelte";

	let name = "Abe";
	let age = 30;
	let jobTitle = "Software Engineer";
	let description = "A passionate developer with a love for coding.";

	function incrementAge() {
		age += 1;
	}

	function randomName() {
		const names = ["Alice", "Bob", "Charlie", "Diana"];
		name = names[Math.floor(Math.random() * names.length)];
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name} {age}!</h1>

<button on:click="{incrementAge}">
	Increment Age
</button>

<button on:click="{randomName}">
	Random Name
</button>	

<input type="text" bind:value="{jobTitle}" placeholder="Enter job title" />
<input type="text" bind:value="{description}" placeholder="Enter a description" />

<ContactCard userName="{name}" jobTitle="{jobTitle}" description="{description}" />
