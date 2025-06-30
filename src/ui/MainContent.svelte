<script lang="ts">
import UserData from "../meetups/UserData.svelte";
</script>

<style>
main {
    padding: 20px;
    background-color: #f0f0f0;
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>

<main>
    <UserData />
</main>