<script lang="ts">
	let name = "Abe";
	let age = 30;

	function incrementAge() {
		age += 1;
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