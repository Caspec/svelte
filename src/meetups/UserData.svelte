<script lang="ts">
	import { onMount } from 'svelte';
	import { userStore } from '../stores/userStore';
	import UserDataItem from './UserDataItem.svelte';

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
	{#each $userStore as user}
		<UserDataItem userName={user.name} userEmail={user.email} />
	{/each}
{/if}

