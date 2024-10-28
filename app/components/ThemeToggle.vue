<template>
    <UButton :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-moon'" color="gray" variant="ghost"
        class="text-gray-400 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-100" @click="toggleTheme"
        :aria-label="isDark ? 'Activer le thème clair' : 'Activer le thème sombre'" />
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>