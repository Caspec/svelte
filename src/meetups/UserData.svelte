<script lang="ts">
	import { onMount } from 'svelte';
	import { userStore } from '../stores/userStore';
	import UserDataItem from './UserDataItem.svelte';

	const { subscribe, fetchUsers, isLoading, error } = userStore;

	onMount(() => {
		fetchUsers();
	});

	function onUserUpdated(event) {
		console.log("user id:", event.detail);
	}
</script>

<h2>Brugere</h2>

{#if $isLoading}
	<p>Indlæser...</p>
{:else if $error}
	<p style="color: red">Fejl: {$error}</p>
{:else}
	{#each $userStore as user}
		<UserDataItem userId={user.id} userName={user.name} userEmail={user.email} on:dispatchUser={onUserUpdated} />
	{/each}
{/if}

