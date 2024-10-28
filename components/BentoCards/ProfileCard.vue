<template>
    <BentoCard size="large"
        class="relative overflow-hidden group flex items-center justify-center hover:shadow-lg transition-all duration-300">
        <router-link to="/a-propos">
            <div class="flex flex-col md:flex-row gap-6 items-center my-auto">
                <img :src="profileImage" alt="Profile"
                    class="w-32 h-32 md:w-48 md:h-48 object-cover bg-primary-100 rounded-tl-3xl rounded-br-3xl mx-auto md:mx-0" />
                <div class="space-y-2 text-center md:text-left">
                    <p class="text-sm text-gray-500 dark:text-gray-400 uppercase">{{ role }}</p>
                    <p class="text-xl dark:text-gray-200">👋 Salut, je suis </p>
                    <h1 class="text-2xl md:text-4xl font-semibold">{{ firstname }} {{ lastname }}</h1>
                    <p class="text-md text-gray-600 dark:text-gray-300">{{ description }}</p>
                </div>
            </div>
            <LinkIcon />
        </router-link>
    </BentoCard>
</template>

<script setup>
defineProps({
    profileImage: String,
    role: String,
    firstname: String,
    lastname: String,
    description: String
})
</script>