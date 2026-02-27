<template>
    <div class="min-h-screen text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-200">

        <!-- Hero Banner -->
        <div class="relative overflow-hidden rounded-2xl mx-4 mt-4"
            style="background: linear-gradient(135deg, #1a0a0a 0%, #3d0c0c 40%, #5c1a1a 70%, #2d1010 100%);">
            <div class="absolute inset-0 opacity-20"
                style="background: radial-gradient(circle at 70% 50%, #ff4444 0%, transparent 60%);" />
            <!-- Neon border bottom -->
            <div class="absolute bottom-0 left-0 right-0 h-1"
                style="background: linear-gradient(90deg, transparent, #00ff88, #4488ff, transparent)" />
            <div class="relative flex items-center justify-between px-8 py-10">
                <div class="max-w-md z-10">
                    <h1 class="text-4xl font-black leading-tight uppercase mb-2"
                        style="color: #f5c842; text-shadow: 0 0 20px rgba(245,200,66,0.4)">
                        GET THE BONUS ON THE<br />FIRST DEPOSIT UP TO<br />500% AND 25 FS
                    </h1>
                    <p class="text-zinc-300 mb-6 text-sm">Claim bonus every day</p>
                    <Button label="Claim Bonus" size="small"
                        style="background: #f5a623; border-color: #f5a623; font-weight: 700; padding: 0.6rem 1.5rem;" />
                </div>
                <!-- Placeholder character -->
                <div class="hidden md:flex items-center justify-center w-72 h-64 relative">
                    <div class="absolute inset-0 rounded-full opacity-30"
                        style="background: radial-gradient(circle, #00ff88 0%, transparent 70%)" />
                    <div class="text-9xl select-none">🃏</div>
                </div>
            </div>
        </div>

        <!-- Category Nav -->
        <div class="mx-4 mt-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-transparent rounded-xl px-4 py-2 flex items-center justify-between gap-2 overflow-x-auto transition-colors duration-200">
            <div class="flex items-center gap-1 shrink-0">
                <button v-for="cat in categories" :key="cat.label" @click="activeCategory = cat.label"
                    class="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200"
                    :class="activeCategory === cat.label
                        ? 'bg-blue-600 text-white'
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800'">
                    <span class="text-base">{{ cat.icon }}</span>
                    {{ cat.label }}
                    <span v-if="cat.count" class="bg-blue-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold">
                        {{ cat.count }}
                    </span>
                </button>
            </div>
            <div class="flex items-center gap-2 shrink-0 ml-auto">
                <IconField>
                    <InputIcon class="pi pi-search" />
                    <InputText v-model="searchQuery" placeholder="Search games" size="small"
                        class="bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-sm w-40" />
                </IconField>
            </div>
        </div>

        <!-- Filter Tabs -->
        <div class="mx-4 mt-3 flex items-center justify-between gap-2 flex-wrap">
            <div class="flex items-center gap-1 flex-wrap">
                <button v-for="tab in filterTabs" :key="tab" @click="activeTab = tab"
                    class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200" :class="activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:text-white dark:hover:bg-zinc-800'">
                    {{ tab }}
                </button>
            </div>
            <Select v-model="selectedProvider" :options="providers" placeholder="Select provider" size="small"
                class="bg-white dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-sm w-48">
                <template #dropdownicon>
                    <i class="pi pi-sliders-h mr-1 text-zinc-400 dark:text-zinc-400 text-xs" />
                </template>
            </Select>
        </div>

        <!-- Popular Section -->
        <div class="mx-4 mt-6">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                    <span class="text-lg">🔥</span>
                    <span class="text-lg font-bold uppercase tracking-wide">Popular</span>
                </div>
                <div class="flex items-center gap-2">
                    <button class="text-sm text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1">
                        View all <span class="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-white text-xs px-1.5 py-0.5 rounded-full">{{
                            popularGames.length
                            }}</span>
                        <i class="pi pi-angle-right text-xs" />
                    </button>
                    <button @click="scrollLeft('popular')"
                        class="w-8 h-8 rounded-full bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-center transition-colors">
                        <i class="pi pi-angle-left text-sm" />
                    </button>
                    <button @click="scrollRight('popular')"
                        class="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors text-white">
                        <i class="pi pi-angle-right text-sm" />
                    </button>
                </div>
            </div>
            <div ref="popularRef" class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
                <div v-for="game in popularGames" :key="game.id"
                    class="shrink-0 w-40 rounded-xl overflow-hidden cursor-pointer group relative"
                    style="aspect-ratio: 3/4">
                    <div class="w-full h-full flex flex-col items-center justify-center relative transition-transform duration-300 group-hover:scale-105"
                        :style="`background: ${game.bg}`">
                        <div class="absolute inset-0 opacity-30"
                            style="background: radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2) 0%, transparent 70%)" />
                        <span class="text-5xl mb-2 relative z-10">{{ game.emoji }}</span>
                        <div class="absolute bottom-0 left-0 right-0 p-3 text-center"
                            style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)">
                            <p class="text-white font-bold text-xs uppercase leading-tight">{{ game.name }}</p>
                            <p class="text-zinc-300 text-xs mt-0.5">{{ game.subtitle }}</p>
                        </div>
                        <!-- Hover overlay -->
                        <div
                            class="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <Button label="Play" size="small" rounded
                                style="background: #f5a623; border-color: #f5a623; font-size: 0.75rem; padding: 0.4rem 1.2rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- New Games Section -->
        <div class="mx-4 mt-8 mb-8">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                    <span class="text-lg">✨</span>
                    <span class="text-lg font-bold uppercase tracking-wide">New Games</span>
                </div>
                <div class="flex items-center gap-2">
                    <button class="text-sm text-blue-500 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1">
                        View all <span class="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-white text-xs px-1.5 py-0.5 rounded-full">{{
                            newGames.length
                            }}</span>
                        <i class="pi pi-angle-right text-xs" />
                    </button>
                    <button @click="scrollLeft('new')"
                        class="w-8 h-8 rounded-full bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-center transition-colors">
                        <i class="pi pi-angle-left text-sm" />
                    </button>
                    <button @click="scrollRight('new')"
                        class="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center transition-colors text-white">
                        <i class="pi pi-angle-right text-sm" />
                    </button>
                </div>
            </div>
            <div ref="newRef" class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide scroll-smooth">
                <div v-for="game in newGames" :key="game.id"
                    class="shrink-0 w-40 rounded-xl overflow-hidden cursor-pointer group relative"
                    style="aspect-ratio: 3/4">
                    <div class="w-full h-full flex flex-col items-center justify-center relative transition-transform duration-300 group-hover:scale-105"
                        :style="`background: ${game.bg}`">
                        <div class="absolute inset-0 opacity-30"
                            style="background: radial-gradient(circle at 50% 30%, rgba(255,255,255,0.2) 0%, transparent 70%)" />
                        <span class="text-5xl mb-2 relative z-10">{{ game.emoji }}</span>
                        <span
                            class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">NEW</span>
                        <div class="absolute bottom-0 left-0 right-0 p-3 text-center"
                            style="background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)">
                            <p class="text-white font-bold text-xs uppercase leading-tight">{{ game.name }}</p>
                            <p class="text-zinc-300 text-xs mt-0.5">{{ game.subtitle }}</p>
                        </div>
                        <div
                            class="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                            <Button label="Play" size="small" rounded
                                style="background: #f5a623; border-color: #f5a623; font-size: 0.75rem; padding: 0.4rem 1.2rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
    Button,
    IconField,
    InputIcon,
    InputText,
    Select,
} from 'primevue'

const activeCategory = ref('Lobby')
const activeTab = ref('All')
const searchQuery = ref('')
const selectedProvider = ref(null)

const popularRef = ref(null)
const newRef = ref(null)

const categories = [
    { label: 'Lobby', icon: '🎰', count: '3000+' },
    { label: 'Slots', icon: '🍒' },
    { label: 'Live Casino', icon: '🎥' },
    { label: 'Table Games', icon: '🎲' },
    { label: 'Card games', icon: '🃏' },
    { label: 'Game Shows', icon: '⭐' },
]

const filterTabs = ['All', 'New Games', 'Top Games', 'Most Played', 'Slots', 'Esport', 'Bonus Games', 'Recent Games']

const providers = ['Pragmatic Play', 'NetEnt', 'Evolution', 'Microgaming', 'Play\'n GO', 'Yggdrasil', 'Hacksaw']

const popularGames = [
    { id: 1, name: 'Tiki Runner 2', subtitle: 'Doublemax', emoji: '🏝️', bg: 'linear-gradient(135deg, #1a5c3a 0%, #2d8a5a 100%)' },
    { id: 2, name: "Dead Man's Fingers", subtitle: "It's a pirate life for me!", emoji: '🏴‍☠️', bg: 'linear-gradient(135deg, #1a1a4a 0%, #2d2d7a 100%)' },
    { id: 3, name: 'Cazino Zeppelin', subtitle: 'Reloaded', emoji: '🎪', bg: 'linear-gradient(135deg, #4a1a2d 0%, #7a2d4a 100%)' },
    { id: 4, name: 'Cthulhu', subtitle: 'Answer the call of Cthulhu', emoji: '🐙', bg: 'linear-gradient(135deg, #0d2a3d 0%, #1a4a6a 100%)' },
    { id: 5, name: 'Medusa Hot 1', subtitle: 'The epic continues', emoji: '🐍', bg: 'linear-gradient(135deg, #3d1a4a 0%, #6a2d7a 100%)' },
    { id: 6, name: 'Jambo Cash', subtitle: 'Let the rhythm be rolling', emoji: '🎭', bg: 'linear-gradient(135deg, #3d2a0d 0%, #6a4a1a 100%)' },
    { id: 7, name: 'Book of Dead', subtitle: 'Ancient riches await', emoji: '📖', bg: 'linear-gradient(135deg, #2a1a0d 0%, #4a3a1a 100%)' },
    { id: 8, name: 'Sweet Bonanza', subtitle: 'Candy land riches', emoji: '🍭', bg: 'linear-gradient(135deg, #4a0d2a 0%, #7a1a4a 100%)' },
]

const newGames = [
    { id: 1, name: 'Thunder Zeus', subtitle: 'Power of the gods', emoji: '⚡', bg: 'linear-gradient(135deg, #1a2a4a 0%, #2d4a7a 100%)' },
    { id: 2, name: 'Golden Dragon', subtitle: 'Eastern fortune', emoji: '🐉', bg: 'linear-gradient(135deg, #3d1a0d 0%, #6a2d1a 100%)' },
    { id: 3, name: 'Neon Rider', subtitle: 'Speed and fortune', emoji: '🏎️', bg: 'linear-gradient(135deg, #0d1a3d 0%, #1a2d6a 100%)' },
    { id: 4, name: 'Mystic Gems', subtitle: 'Hidden treasures', emoji: '💎', bg: 'linear-gradient(135deg, #0d2a1a 0%, #1a4a2d 100%)' },
    { id: 5, name: 'Aztec Gold', subtitle: 'Ancient civilization', emoji: '🏺', bg: 'linear-gradient(135deg, #2a1a0d 0%, #4a3a1a 100%)' },
    { id: 6, name: 'Phantom Opera', subtitle: 'The show must go on', emoji: '🎭', bg: 'linear-gradient(135deg, #1a0d2a 0%, #2d1a4a 100%)' },
    { id: 7, name: 'Lucky Panda', subtitle: 'Eastern lucky charms', emoji: '🐼', bg: 'linear-gradient(135deg, #1a3a1a 0%, #2d5a2d 100%)' },
    { id: 8, name: 'Space Quest', subtitle: 'Galaxy of riches', emoji: '🚀', bg: 'linear-gradient(135deg, #0d0d2a 0%, #1a1a4a 100%)' },
]

const scrollLeft = (section) => {
    const el = section === 'popular' ? popularRef.value : newRef.value
    if (el) el.scrollBy({ left: -400, behavior: 'smooth' })
}

const scrollRight = (section) => {
    const el = section === 'popular' ? popularRef.value : newRef.value
    if (el) el.scrollBy({ left: 400, behavior: 'smooth' })
}
</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>