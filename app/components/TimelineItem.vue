<template>
    <div class="relative pl-12">
        <!-- Point sur la timeline -->
        <div class="absolute left-0 w-8 h-8 bg-white dark:bg-gray-900 border-2 border-primary-500 rounded-full">
            <div class="absolute inset-2 bg-primary-500 rounded-full"></div>
        </div>

        <!-- Contenu -->
        <div class="group">
            <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                <!-- Date -->
                <span class="text-sm font-medium text-primary-600 dark:text-primary-400">
                    {{ data.date }}
                </span>

                <!-- Titre et Lieu -->
                <div class="flex-1">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500">
                        {{ data.title }}
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400">
                        {{ data.company || data.school }} • {{ data.location }}
                    </p>
                </div>
            </div>

            <!-- Description et Réalisations -->
            <div class="mt-4 space-y-4">
                <p class="text-gray-600 dark:text-gray-300">
                    {{ data.description }}
                </p>

                <ul v-if="data.achievements" class="space-y-2">
                    <li v-for="(achievement, index) in data.achievements" :key="index"
                        class="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                        <Icon name="heroicons:check-circle" class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                        <span>{{ achievement }}</span>
                    </li>
                </ul>

                <div v-if="data.skills" class="flex flex-wrap gap-2">
                    <span v-for="skill in data.skills" :key="skill"
                        class="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full">
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    }
})
</script>