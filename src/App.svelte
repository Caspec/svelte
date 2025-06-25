<script lang="ts">
	let name = "Abe";
	let age = 30;

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

<button on:click={incrementAge}>
	Increment Age
</button>

<button on:click={randomName}>
	Random Name
</button>	
