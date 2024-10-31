<template>
    <article v-if="project" class="prose mx-auto p-4">
        <h1>{{ project.title }}</h1>
        <img :src="project.image" alt="" class="w-full h-48 object-cover" />
        <p>{{ project.description }}</p>
        <ContentRenderer :value="project" />
    </article>
</template>

<script setup>
const route = useRoute()
const { data: project } = await useAsyncData(`project-${route.params.slug}`, () =>
    queryContent('projects').where({
        _path: `/projects/${route.params.slug}`
    }).findOne()
)
</script>