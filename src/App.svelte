<script lang="ts">
	import ContactCard from "./ContactCard.svelte";

	let name = "Abe";
	let age = 30;
	let jobTitle = "Software Engineer";
	let description = "A passionate developer with a love for coding.";
	let bool = true;
	let listArr = ["Item 1", "Item 2", "Item 3"];

	function incrementAge() {
		age += 1;
	}

	function randomName() {
		const names = ["Alice", "Bob", "Charlie", "Diana"];
		name = names[Math.floor(Math.random() * names.length)];
	}

	function toggleBool() {
		bool = !bool;
	}

	function deleteLastItem() {
		if (listArr.length > 0) {
			listArr = listArr.slice(0, -1);
		}
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

<button on:click="{toggleBool}">Toggle bool ({bool})</button>

<button on:click="{deleteLastItem}">Delete Last Item</button>

<input type="text" bind:value="{jobTitle}" placeholder="Enter job title" />
<input type="text" bind:value="{description}" placeholder="Enter a description" />


<ContactCard userName="{name}" jobTitle="{jobTitle}" description="{description}" />

{#if bool}
	<p>Boolean is true</p>
{:else}
	<p>Boolean is false</p>
{/if}

{#each listArr as item, index}
	<p>{item},  index: {index}</p>
	{#if index % 2 === 0}
		<p>Even index</p>
	{:else}
		<p>Odd index</p>
	{/if}
	{:else}
	<p>No items in the list</p>
{/each}