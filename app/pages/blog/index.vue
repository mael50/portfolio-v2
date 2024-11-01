<template>
    <section class="py-20 min-h-screen">
        <div class="container mx-auto px-4 max-w-6xl">
            <header class="text-center mb-20">
                <h1
                    class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600 text-transparent bg-clip-text">
                    Mon Blog
                </h1>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Explorez mes réflexions, tutoriels et retours d'expérience sur le développement web,
                    la technologie et l'innovation numérique.
                </p>
            </header>

            <div class="flex flex-wrap justify-center gap-4 mb-16">
                <button v-for="tag in availableTags" :key="tag" @click="toggleTag(tag)"
                    class="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out"
                    :class="[
                        selectedTags.includes(tag)
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    ]">
                    {{ tag }}
                </button>
            </div>

            <!-- Liste d'articles avec mise en page améliorée -->
            <div class="space-y-12">
                <article v-for="article in filteredArticles" :key="article._path" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                          transition-all duration-300 ease-in-out hover:shadow-xl">
                    <nuxt-link :to="article._path" class="flex flex-col md:flex-row">
                        <!-- Image de couverture -->
                        <div class="md:w-1/3 aspect-video md:aspect-square overflow-hidden">
                            <img :src="article.image || '/default-blog-image.jpg'" :alt="article.title"
                                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </div>

                        <!-- Contenu de l'article -->
                        <div class="p-6 md:w-2/3 flex flex-col justify-between">
                            <div>
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                        {{ formatDate(article.date) }}
                                    </span>
                                    <span v-if="article.readTime"
                                        class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-full font-semibold text-gray-600 dark:text-gray-300">
                                        {{ article.readTime }} min de lecture
                                    </span>
                                </div>

                                <h2
                                    class="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    {{ article.title }}
                                </h2>

                                <p class="text-gray-600 dark:text-gray-300 mb-4">
                                    {{ article.description }}
                                </p>
                            </div>

                            <!-- Affichage des tags -->
                            <div class="flex flex-wrap gap-2 mt-auto">
                                <span v-for="tag in (article.tags || [])" :key="tag" class="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 
                               text-gray-600 dark:text-gray-300 rounded-full">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </nuxt-link>
                </article>
            </div>

            <!-- Message en cas d'absence d'articles -->
            <div v-if="filteredArticles.length === 0" class="text-center py-20">
                <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-12 max-w-2xl mx-auto">
                    <p class="text-xl text-gray-600 dark:text-gray-300 font-medium">
                        Aucun article ne correspond à votre recherche.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Le script reste inchangé
const { data: articles } = await useAsyncData('blog', () =>
    queryContent('blog')
        .sort({ date: -1 })
        .find()
)

const selectedTags = ref([])
const availableTags = computed(() => {
    if (!articles.value) return []
    const tags = new Set()
    articles.value.forEach(article => {
        article.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
})

const filteredArticles = computed(() => {
    if (!articles.value) return []
    return selectedTags.value.length === 0 ? articles.value : articles.value.filter(article =>
        article.tags && selectedTags.value.some(tag => article.tags.includes(tag))
    )
})

const toggleTag = (tag) => {
    if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter(t => t !== tag)
    } else {
        selectedTags.value.push(tag)
    }
}

const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
@keyframes gradient-x {

    0%,
    100% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }
}

.animate-gradient-x {
    background-size: 200% 200%;
    animation: gradient-x 5s ease infinite;
}
</style>