<script lang="ts">
	import { onMount } from 'svelte';
	import { userStore } from '../stores/userStore';

	const { subscribe, fetchUsers, isLoading, error } = userStore;

	onMount(() => {
		fetchUsers();
	});
</script>

<h2>Brugere</h2>

{#if $isLoading}
	<p>Indlæser...</p>
{:else if $error}
	<p style="color: red">Fejl: {$error}</p>
{:else}
	<ul>
		{#each $userStore as user}
			<li>{user.name} – {user.email}</li>
		{/each}
	</ul>
{/if}
