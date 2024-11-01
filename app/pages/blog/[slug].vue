<template>
    <article class="container mx-auto px-4 max-w-4xl py-16">
        <!-- En-tête de l'article -->
        <header class="mb-12 text-center">
            <h1
                class="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-500 dark:to-primary-300">
                {{ article.title }}
            </h1>

            <div class="flex justify-center items-center space-x-4 text-gray-600 dark:text-gray-300 mb-6">
                <span>{{ formatDate(article.date) }}</span>
                <span class="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                    {{ article.readTime }} min de lecture
                </span>
            </div>

            <!-- Tags -->
            <div class="flex justify-center flex-wrap gap-2 mb-6">
                <span v-for="tag in (article.tags || [])" :key="tag"
                    class="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    {{ tag }}
                </span>
            </div>
        </header>

        <!-- Image de couverture -->
        <div class="mb-12 rounded-xl overflow-hidden shadow-lg">
            <img :src="article.image || '/default-blog-image.jpg'" :alt="article.title"
                class="w-full h-auto object-cover" />
        </div>

        <!-- Contenu de l'article -->
        <div class="prose dark:prose-invert max-w-none">
            <ContentRenderer :value="article" />
        </div>

        <!-- Navigation entre articles -->
        <nav class="mt-16 border-t pt-8 flex justify-between">
            <NuxtLink v-if="prevArticle" :to="prevArticle._path"
                class="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800">
                <Icon name="mdi:arrow-left" />
                <span>{{ prevArticle.title }}</span>
            </NuxtLink>
            <div v-else></div>

            <NuxtLink v-if="nextArticle" :to="nextArticle._path"
                class="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800">
                <span>{{ nextArticle.title }}</span>
                <Icon name="mdi:arrow-right" />
            </NuxtLink>
        </nav>
    </article>
</template>

<script setup>
const { path } = useRoute()

// Récupérer l'article courant
const { data: article } = await useAsyncData(`article-${path}`, () =>
    queryContent(path).findOne()
)

// Navigation entre articles
const { data: surroundArticles } = await useAsyncData(`surround-${path}`, () =>
    queryContent('blog')
        .where({ _partial: false, type: 'blog' })
        .sort({ date: -1 })
        .findSurround(path)
)

const [prevArticle, nextArticle] = surroundArticles.value || [null, null]

// Formater la date
const formatDate = (date) => {
    if (!date) return ''
    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

// Titre de la page dynamique
useHead({
    title: article.value?.title,
    meta: [
        {
            name: 'description',
            content: article.value?.description
        }
    ]
})
</script>

<style scoped>
/* Styles Tailwind pour la mise en page du contenu du blog */
.prose {
    @apply leading-relaxed text-gray-800 dark:text-gray-200;
}

.prose h2,
.prose h3 {
    @apply text-gray-900 dark:text-white mb-4 mt-8;
}

.prose p {
    @apply mb-4;
}
</style>