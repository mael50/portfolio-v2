<template>
    <BentoCard size="large" class="flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300">
        <nuxt-link to="/projects" class="flex flex-col h-full">
            <div class="flex-grow mx-auto">
                <img src="/images/projects-cover.png" class="w-72 h-auto object-cover" alt="Projects cover" />
            </div>
            <div class="relative mb-2 w-fit ml-4">
                <span class="absolute -inset-1 bg-primary-500/20 rounded-lg blur-lg"></span>
                <h2 class="relative text-2xl md:text-3xl font-bold text-primary-950 dark:text-white px-2 rounded-3xl">
                    Projets
                    <UIcon name="heroicons:sparkles" class="w-6 h-6 text-primary-500 animate-pulse" />
                </h2>
            </div>
            <LinkIcon />
        </nuxt-link>
    </BentoCard>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>
