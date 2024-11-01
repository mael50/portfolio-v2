<template>
    <article v-if="project" class="container mx-auto px-4 py-12 min-h-screen">
        <nuxt-link to="/projects" data-aos="fade-right" data-aos-duration="400"
            class="inline-flex items-center mb-8 text-primary-600 hover:text-primary-700 bg-primary-50 dark:bg-primary-900/30 px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-lg group">
            <UIcon name="i-heroicons-arrow-left"
                class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Retour aux projets
        </nuxt-link>

        <div class="max-w-4xl mx-auto mb-12">
            <div data-aos="zoom-in" data-aos-duration="250" class="relative group">
                <img :src="project.image" :alt="project.title"
                    class="w-full h-[500px] object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.03]" />
                <div
                    class="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
            </div>

            <div class="space-y-6 mt-8">
                <h1 data-aos="fade-up" data-aos-delay="100"
                    class="text-5xl font-extrabold text-gray-900 dark:text-white bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                    {{ project.title }}
                </h1>

                <div data-aos="fade-up" data-aos-delay="150"
                    class="flex flex-wrap gap-6 items-center text-gray-600 dark:text-gray-300">
                    <span class="flex items-center gap-2 hover:text-primary-600 transition-colors duration-300">
                        <UIcon name="i-heroicons-calendar" class="w-5 h-5" />
                        {{ formatDate(project.date) }}
                    </span>
                    <span v-if="project.github" class="flex items-center gap-2">
                        <UIcon name="i-mdi-github" class="w-5 h-5" />
                        <a :href="project.github" target="_blank"
                            class="hover:text-primary-600 transition-colors hover:underline">GitHub</a>
                    </span>
                    <span v-if="project.demo" class="flex items-center gap-2">
                        <UIcon name="i-heroicons-arrow-top-right-on-square" class="w-5 h-5" />
                        <a :href="project.demo" target="_blank"
                            class="hover:text-primary-600 transition-colors hover:underline">Accéder au site</a>
                    </span>
                </div>

                <!-- Tags avec animation -->
                <div data-aos="fade-up" data-aos-delay="200" class="flex flex-wrap gap-2">
                    <span v-for="tag in project.tags" :key="tag"
                        class="px-4 py-1.5 bg-primary-100 dark:bg-primary-800/50 text-primary-700 dark:text-primary-200 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default">
                        {{ tag }}
                    </span>
                </div>

                <!-- Description avec animation -->
                <p data-aos="fade-up" data-aos-delay="250"
                    class="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                    {{ project.description }}
                </p>
            </div>
        </div>

        <!-- Main content avec animation -->
        <div data-aos="fade-up" data-aos-delay="300" class="max-w-4xl mx-auto prose dark:prose-invert prose-primary 
                   prose-headings:font-bold prose-h2:text-3xl prose-h3:text-2xl
                   prose-a:text-primary-600 dark:prose-a:text-primary-400
                   prose-strong:text-primary-700 dark:prose-strong:text-primary-300">
            <ContentRenderer :value="project" />
        </div>

        <!-- Project navigation avec animation -->
        <div class="max-w-4xl mx-auto mt-16 flex justify-between items-center">
            <nuxt-link v-if="prevProject" :to="prevProject._path" data-aos="fade-right"
                class="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-300 group">
                <UIcon name="i-heroicons-arrow-left"
                    class="w-6 h-6 text-primary-600 transform group-hover:-translate-x-1 transition-transform" />
                <div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Projet précédent</div>
                    <div class="font-medium text-gray-900 dark:text-white">{{ prevProject.title }}</div>
                </div>
            </nuxt-link>
            <div v-else class="w-24"></div>

            <nuxt-link v-if="nextProject" :to="nextProject._path" data-aos="fade-left"
                class="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-300 text-right group">
                <div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Projet suivant</div>
                    <div class="font-medium text-gray-900 dark:text-white">{{ nextProject.title }}</div>
                </div>
                <UIcon name="i-heroicons-arrow-right"
                    class="w-6 h-6 text-primary-600 transform group-hover:translate-x-1 transition-transform" />
            </nuxt-link>
        </div>
    </article>
</template>

<script setup>
const route = useRoute()

// Récupération du projet courant
const { data: project } = await useAsyncData('project', () =>
    queryContent('projects').where({ _path: `/projects/${route.params.slug}` }).findOne()
)

// Récupération de tous les projets pour la navigation
const { data: allProjects } = await useAsyncData('allProjects', () =>
    queryContent('projects').sort({ date: -1 }).find()
)

// Gestion des erreurs
if (!project.value) {
    throw createError({ statusCode: 404, message: 'Project not found' })
}

// Navigation entre projets
const currentIndex = computed(() => {
    return allProjects.value.findIndex(p => p._path === project.value._path)
})

const prevProject = computed(() => {
    return currentIndex.value > 0 ? allProjects.value[currentIndex.value - 1] : null
})

const nextProject = computed(() => {
    return currentIndex.value < allProjects.value.length - 1
        ? allProjects.value[currentIndex.value + 1]
        : null
})

// Formatage de la date
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
    })
}
</script>

<style scoped>
/* Styles pour le contenu de prose */
:deep(.prose) {
    @apply max-w-4xl my-6 leading-relaxed;
}

:deep(.prose a) {
    @apply text-primary-600 dark:text-primary-400 decoration-primary-300 dark:decoration-primary-700 decoration-2 underline-offset-2 transition-all;
}

:deep(.prose a:hover) {
    @apply text-primary-700 dark:text-primary-300 decoration-primary-500 dark:decoration-primary-500;
}

/* Style pour les titres */
:deep(.prose h2, .prose h3, .prose h4) {
    @apply bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent;
}
</style>