<template>
    <div class="sticky top-0 z-50 backdrop-blur-sm bg-white/20 dark:bg-zinc-900/30">
        <div class="container py-3 px-4 mx-auto">
            <div class="flex justify-between items-center">
                <div class="flex space-x-2 items-center">
                    <RouterLink to="/">VRIV</RouterLink>
                    <!-- <InputText size="small" placeholder="Buscar..." rounde class="w-64" /> -->
                </div>
                <div v-if="!isAuthenticated" class="flex space-x-2 items-center">
                    <Button label="Registrarse" outlined size="small"/>
                    <Button label="Ingresar" size="small" @click="openForm"/>
                </div>
                <div v-else>
                    <UserButton />
                </div>
            </div>
        </div>
    </div>
    <Dialog header="Bienvenido a VRIV" v-model:visible="openAuthModal" modal :style="{ width: '25rem' }">
        <div class="space-y-2">
            <div class="flex justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path fill="url(#SVGurBoqbnc)" fill-rule="evenodd" d="M13.1 7.278a5.247 5.247 0 0 1 6.95-2.844l2.946 1.277c.69.299 1.472.302 2.164.01l2.958-1.253a5.247 5.247 0 0 1 6.924 2.903l1.18 2.987a2.75 2.75 0 0 0 1.524 1.536l2.976 1.207a5.247 5.247 0 0 1 2.844 6.948l-1.277 2.947a2.75 2.75 0 0 0-.01 2.164l1.253 2.958a5.247 5.247 0 0 1-2.903 6.924l-2.987 1.18a2.75 2.75 0 0 0-1.536 1.524l-1.207 2.976a5.247 5.247 0 0 1-6.948 2.844l-2.947-1.277a2.75 2.75 0 0 0-2.164-.01l-2.958 1.252a5.247 5.247 0 0 1-6.924-2.902l-1.18-2.987a2.75 2.75 0 0 0-1.524-1.536l-2.976-1.207a5.247 5.247 0 0 1-2.844-6.948l1.277-2.947c.299-.69.302-1.472.01-2.164l-1.253-2.958a5.247 5.247 0 0 1 2.903-6.924l2.987-1.18a2.75 2.75 0 0 0 1.536-1.524z" clip-rule="evenodd"/><path fill="url(#SVGuGDwKeby)" fill-opacity="0.7" fill-rule="evenodd" d="M13.1 7.278a5.247 5.247 0 0 1 6.95-2.844l2.946 1.277c.69.299 1.472.302 2.164.01l2.958-1.253a5.247 5.247 0 0 1 6.924 2.903l1.18 2.987a2.75 2.75 0 0 0 1.524 1.536l2.976 1.207a5.247 5.247 0 0 1 2.844 6.948l-1.277 2.947a2.75 2.75 0 0 0-.01 2.164l1.253 2.958a5.247 5.247 0 0 1-2.903 6.924l-2.987 1.18a2.75 2.75 0 0 0-1.536 1.524l-1.207 2.976a5.247 5.247 0 0 1-6.948 2.844l-2.947-1.277a2.75 2.75 0 0 0-2.164-.01l-2.958 1.252a5.247 5.247 0 0 1-6.924-2.902l-1.18-2.987a2.75 2.75 0 0 0-1.524-1.536l-2.976-1.207a5.247 5.247 0 0 1-2.844-6.948l1.277-2.947c.299-.69.302-1.472.01-2.164l-1.253-2.958a5.247 5.247 0 0 1 2.903-6.924l2.987-1.18a2.75 2.75 0 0 0 1.536-1.524z" clip-rule="evenodd"/><path fill="url(#SVG8mx9Iccj)" fill-opacity="0.9" d="M24 11.93a4.828 4.828 0 1 0 0 9.656a4.828 4.828 0 0 0 0-9.656M30.035 24h-12.07c-2 0-3.621 1.62-3.621 3.62c0 2.695 1.108 4.854 2.926 6.313c1.79 1.436 4.188 2.137 6.73 2.137s4.94-.7 6.73-2.137c1.818-1.46 2.926-3.618 2.926-6.312c0-2-1.621-3.621-3.621-3.621"/><defs><linearGradient id="SVGurBoqbnc" x1="10.667" x2="30.667" y1="1.778" y2="46.222" gradientUnits="userSpaceOnUse"><stop stop-color="#1ec8b0"/><stop offset="1" stop-color="#2764e7"/></linearGradient><linearGradient id="SVGuGDwKeby" x1="30.191" x2="38.118" y1="8.912" y2="48.302" gradientUnits="userSpaceOnUse"><stop offset=".533" stop-color="#ff6ce8" stop-opacity="0"/><stop offset="1" stop-color="#ff6ce8"/></linearGradient><linearGradient id="SVG8mx9Iccj" x1="38.492" x2="-3.893" y1="56.761" y2="-5.423" gradientUnits="userSpaceOnUse"><stop stop-color="#9deaff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></g></svg>
            </div>
            <div>
                <label for="email" class="block mb-1 font-medium text-gray-700 dark:text-gray-300">Correo electrónico o usuario</label>
                <InputText v-model="userLogin.email" id="email" type="email" fluid />
            </div>
            <div>
                <label for="password" class="block mb-1 font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
                <InputText v-model="userLogin.password" id="password" type="password" fluid @keypress.enter="onLogin(userLogin)"/>
            </div>
            <div>
                <Message severity="error" v-if="error">
                    {{ error }}
                </Message>
            </div>
            <div class="mt-4">
                <Button label="Ingresar" :loading="isLoading" @click="onLogin(userLogin)" fluid />
            </div>
            <div>
                <Divider>
                    <span class="text-sm text-gray-500 dark:text-gray-400">O</span>
                </Divider>
            </div>
            <div>
                <Button @click="onLoginWithGoogle" label="Ingresar con Google" outlined fluid icon="pi pi-google"/>
            </div>
        </div>
    </Dialog>
</template> 

<script setup>
import {
    Button,
    Dialog,
    InputText,
    Divider,
    Message
} from 'primevue'
import useAuth from '../../auth/hooks/useAuth';
import { ref } from 'vue';
import UserButton from './UserButton.vue';

const userLogin = ref({
    email: "",
    password: ""
})

const {
    openAuthModal,
    isAuthenticated,
    onLogin,
    isLoading,
    error,
    onLoginWithGoogle
} = useAuth()

const openForm = () => {
    openAuthModal.value = true
}
</script>