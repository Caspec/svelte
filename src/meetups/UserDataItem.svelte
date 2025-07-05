<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let userId = 0;
    export let userName;
    export let userEmail;

    const dispatch = createEventDispatcher();

    function dispatchUserId() {
            dispatch("dispatchUser", userId);
        }
</script>

<ul>
	<li>{userName} – {userEmail}</li>
</ul>

<button on:click={dispatchUserId}>Dispatch User ID</button>
