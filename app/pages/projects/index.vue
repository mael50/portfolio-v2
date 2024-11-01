<template>
    <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
        <div class="container mx-auto max-w-7xl px-4">
            <!-- En-tête de la section -->
            <div class="text-center mb-16">
                <h1
                    class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 text-transparent bg-clip-text">
                    Mes Projets
                </h1>
                <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Découvrez une sélection de mes réalisations les plus récentes,
                    mettant en valeur mon expertise en développement web.
                </p>
            </div>

            <!-- Filtres dynamiques -->
            <div class="flex flex-wrap gap-4 justify-center mb-12">
                <UButton variant="soft" :class="{ 'bg-primary-500 text-white': !activeFilter }"
                    @click="activeFilter = null">
                    Tous
                </UButton>
                <UButton v-for="filter in availableFilters" :key="filter" variant="soft"
                    :class="{ 'bg-primary-500 text-white': activeFilter === filter }" @click="activeFilter = filter">
                    {{ filter }}
                </UButton>
            </div>

            <!-- Grille de projets -->
            <TransitionGroup name="projects-grid" tag="div"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in filteredProjects" :key="project._path" class="group relative"
                    @click="navigateToProject(project._path)">
                    <div
                        class="card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                        <!-- Image container avec overlay -->
                        <div class="relative overflow-hidden aspect-video">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <!-- Contenu -->
                        <div class="p-6">
                            <div class="flex items-center gap-4 mb-4">
                                <span v-if="project.category"
                                    class="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                                    {{ project.category }}
                                </span>
                                <span class="text-sm text-gray-500 dark:text-gray-400">
                                    {{ formatDate(project.date) }}
                                </span>
                            </div>

                            <h2
                                class="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                                {{ project.title }}
                            </h2>

                            <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                {{ project.description }}
                            </p>

                            <!-- Tags -->
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tag in (project.tags || [])" :key="tag"
                                    class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionGroup>

            <!-- Message si aucun projet -->
            <div v-if="filteredProjects.length === 0" class="text-center py-12">
                <p class="text-gray-600 dark:text-gray-300">
                    Aucun projet ne correspond à ce filtre.
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
const router = useRouter()
const { data: projects } = await useAsyncData('projects', () =>
    queryContent('projects').sort({ date: -1 }).find()
)

const activeFilter = ref(null)

// Récupère automatiquement tous les filtres uniques des projets
const availableFilters = computed(() => {
    if (!projects.value) return []

    const filters = new Set()

    // Ajoute les catégories
    projects.value.forEach(project => {
        if (project.category) {
            filters.add(project.category)
        }
        // Ajoute les tags
        if (project.tags) {
            project.tags.forEach(tag => filters.add(tag))
        }
    })

    return Array.from(filters).sort()
})

const filteredProjects = computed(() => {
    if (!projects.value) return []
    if (!activeFilter.value) return projects.value

    return projects.value.filter(project =>
        project.category === activeFilter.value ||
        project.tags?.includes(activeFilter.value)
    )
})

const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long'
    })
}

const navigateToProject = (path) => {
    router.push(path)
}
</script>

<style scoped>
.projects-grid-move {
    transition: transform 0.5s ease;
}

.projects-grid-enter-active,
.projects-grid-leave-active {
    transition: all 0.5s ease;
}

.projects-grid-enter-from,
.projects-grid-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.card {
    backdrop-filter: blur(10px);
    transform: translateZ(0);
    backface-visibility: hidden;
}

@media (hover: hover) {
    .card::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(800px circle at var(--x) var(--y),
                rgba(255, 255, 255, 0.06),
                transparent 40%);
        opacity: 0;
        transition: opacity 0.3s;
    }

    .card:hover::after {
        opacity: 1;
    }
}
</style>

<script>
// Effet de brillance au survol
if (process.client) {
    window.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.card')
        cards.forEach(card => {
            const rect = card.getBoundingClientRect()
            const x = e.clientX - rect.left
            const y = e.clientY - rect.top
            card.style.setProperty('--x', `${x}px`)
            card.style.setProperty('--y', `${y}px`)
        })
    })
}
</script>