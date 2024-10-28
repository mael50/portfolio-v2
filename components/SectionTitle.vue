<template>
    <div class="flex flex-col items-center gap-4">
        <!-- Icon et titre groupés -->
        <div class="flex items-center gap-4">
            <!-- Titre principal -->
            <h1 class="text-4xl text-center font-bold text-gray-900 dark:text-white tracking-tight">
                {{ title }}
            </h1>
        </div>

        <!-- Ligne décorative -->
        <div class="flex items-center w-full max-w-xs">
            <div class="h-0.5 flex-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
            <div class="h-2 w-2 mx-4 rounded-full bg-primary-500"></div>
            <div class="h-0.5 flex-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
        </div>

        <!-- Sous-titre optionnel -->
        <p v-if="subtitle" class="text-lg text-gray-600 dark:text-gray-400">
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        default: '',
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        default: '',
    },
})
</script>

<style scoped>
/* Animation subtile pour l'icône au survol */
.relative:hover .transform {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(1.5);
    }

    50% {
        transform: scale(1.75);
    }

    100% {
        transform: scale(1.5);
    }
}
</style>