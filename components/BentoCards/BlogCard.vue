<template>
    <BentoCard size="small" class="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <router-link to="/blog">
            <div class="p-4 text-black dark:text-gray-200 flex items-center justify-center h-full relative">
                <span :class="{ 'light-blog-text': !isDark, 'dark-blog-text': isDark }"
                    class="relative z-10 uppercase blog-text font-bold">Blog</span>
            </div>
        </router-link>
        <LinkIcon />
    </BentoCard>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<style scoped>
.light-blog-text {
    font-size: 4rem;
    text-transform: uppercase;
    background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

.dark-blog-text {
    font-size: 4rem;
    text-transform: uppercase;
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}
</style>