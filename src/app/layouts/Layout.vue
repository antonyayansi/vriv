<template>
    <div class="h-screen overflow-y-auto">
        <Topbar />
        <div class="container mx-auto">
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import Topbar from '../components/Topbar.vue';

</script>