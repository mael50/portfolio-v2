<template>
    <main class="container mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="project in projects" :key="project._path" class="card">
                <nuxt-link :to="project._path">
                    <img :src="project.image" alt="" class="w-full h-48 object-cover" />
                    <h2 class="text-xl font-bold">{{ project.title }}</h2>
                    <p>{{ project.description }}</p>
                </nuxt-link>
            </div>
        </div>
    </main>
</template>

<script setup>
// Importation correcte de queryContent
const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').find())
</script>

<style scoped>
.card {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}
</style>