<template>
    <BentoCard size="wide" class="relative overflow-hidden group">
        <!-- Premier bandeau défilant -->
        <NuxtMarquee class="py-2" speed="20" pauseOnHover>
            <div class="flex gap-8 items-center">
                <span v-for="item in firstRowItems" :key="item.name"
                    class="inline-flex items-center gap-2 text-sm font-medium px-4">
                    <UIcon :name="item.icon" class="w-5 h-5" />
                    {{ item.name }}
                </span>
            </div>
        </NuxtMarquee>

        <!-- Deuxième bandeau défilant (direction opposée) -->
        <NuxtMarquee class="py-2 mt-4" speed="20" direction="right" pauseOnHover>
            <div class="flex gap-8 items-center">
                <span v-for="item in secondRowItems" :key="item.name"
                    class="inline-flex items-center gap-2 text-sm font-medium px-4">
                    <UIcon :name="item.icon" class="w-5 h-5" />
                    {{ item.name }}
                </span>
            </div>
        </NuxtMarquee>
    </BentoCard>
</template>

<script setup>
const firstRowItems = [
    { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
    { name: 'React', icon: 'i-simple-icons-react' },
    { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
    { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs' },
    { name: 'TailwindCSS', icon: 'i-simple-icons-tailwindcss' },
    { name: 'Bootstrap', icon: 'i-simple-icons-bootstrap' },
    { name: 'Three.js', icon: 'i-simple-icons-threedotjs' }
]

const secondRowItems = [
    { name: 'Symfony', icon: 'i-simple-icons-symfony' },
    { name: 'MySQL', icon: 'i-simple-icons-mysql' },
    { name: 'Docker', icon: 'i-simple-icons-docker' },
    { name: 'GitHub', icon: 'i-simple-icons-github' },
    { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
    { name: 'Python', icon: 'i-simple-icons-python' },
]
</script>

<style scoped>
/* Ajoutez des styles personnalisés si nécessaire */
</style>