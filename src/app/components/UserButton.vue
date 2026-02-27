<template>
    <div v-if="user">
        <button 
            @click="toggle"
            class="flex space-x-2 items-center px-3 py-1">
            <span>{{ user?.name }}</span>
            <Avatar :image="user?.avatar ? `${IMG_URL}${user.avatar}` : null" :label="user?.name[0]" shape="circle" />
        </button>
        <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
    </div>
</template>

<script setup>
import { Menu, Avatar } from 'primevue';
import { ref } from 'vue';
import useAuth from '../../auth/hooks/useAuth';
import { useRouter } from 'vue-router';

const router = useRouter();

const {
    user,
    logout
} = useAuth()

const menu = ref();
const items = ref([
    {
        label: user.value?.name,
        items: [
            {
                label: 'Mi cuenta',
                icon: 'pi pi-user',
                command: () => {
                    router.push('/my-account')
                }
            },
            {
                label: 'Salir',
                icon: 'pi pi-sign-out',
                command: async () => {
                    await logout()
                }
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
</script>