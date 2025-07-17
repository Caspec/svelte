<script lang="ts">
	import { onMount } from 'svelte';
	import { userStore } from '../stores/userStore';
	import UserDataItem from './UserDataItem.svelte';

	const { subscribe, fetchUsers, userTime, price, quantity, total, totalWithTax, isLoading, error } = userStore;

	onMount(() => {
		fetchUsers();
	});

	function onUserUpdated(event) {
		console.log("user id:", event.detail);
	}
</script>

<p>Klokken er: {$userTime.toLocaleTimeString()}</p>

<label>
  Pris: <input type="number" bind:value={$price} />
</label>
<br />
<label>
  Antal: <input type="number" bind:value={$quantity} />
</label>

<p>Total uden moms: {$total} kr</p>
<p>Total med moms: {$totalWithTax.toFixed(2)} kr</p>

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

