<template>
    <div class="h-screen overflow-y-auto bg-zinc-950">
        <Topbar />
        <div class="max-w-7xl mx-auto">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import Topbar from '../components/Topbar.vue';

</script>