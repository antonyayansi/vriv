<template>
    <div class="flex items-center gap-2">
        <!-- Icono circular con plus -->
        <button class="w-8 h-8 border-4 cursor-pointer rounded-full bg-green-500 border-green-300 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="white" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/>
            </svg>
        </button>
        
        <!-- Contenido de texto -->
        <div class="flex flex-col">
            <h1 class="font-medium text-xs text-neutral-400 text-right">Saldo</h1>
            <span class="text-white font-bold">VP {{ saldo.toLocaleString() }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const saldo = ref(140);
</script>