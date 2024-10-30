<template>
    <div class="space-y-6">
        <SectionTitle icon="heroicons:heart" title="Centres d'intérêt" />

        <!-- Principaux intérêts -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="interest in interests" :key="interest.id"
                class="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                <div class="flex items-center gap-4 mb-4">
                    <div
                        class="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 group-hover:scale-110 transition-transform">
                        <Icon :name="interest.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        {{ interest.title }}
                    </h3>
                </div>
                <p class="text-gray-600 dark:text-gray-300">
                    {{ interest.description }}
                </p>
            </div>
        </div>

        <!-- Section Sports -->
        <div class="mt-12">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon name="heroicons:trophy" class="w-6 h-6 text-primary-500" />
                Passions Sportives
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    class="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img src="/images/smcaen-background.jpg" alt="MMA"
                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h4 class="text-xl font-bold text-white mb-2">Stade Malherbe Caen</h4>
                        <p class="text-gray-200 text-sm">
                            Passionné par le football et supporter du Stade Malherbe de Caen, je suis les matchs et
                            l'actualité du club.
                        </p>
                    </div>
                </div>

                <div
                    class="relative group overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img src="/images/f1-background.jpg" alt="Formule 1"
                        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div class="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <h4 class="text-xl font-bold text-white mb-2">Formule 1</h4>
                        <p class="text-gray-200 text-sm">
                            Amateur de F1, et plus largement de sports mécaniques, je suis les courses et les actualités
                            des pilotes.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Autres Hobbies -->
        <div class="mt-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Autres activités
            </h3>
            <div class="flex flex-wrap gap-4">
                <div v-for="hobby in hobbies" :key="hobby.id"
                    class="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300">
                    <Icon :name="hobby.icon" class="w-5 h-5 text-primary-500" />
                    <span class="text-gray-700 dark:text-gray-300">
                        {{ hobby.name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const interests = [
    {
        id: 1,
        title: "Veille Technologique",
        icon: "heroicons:light-bulb",
        description: "Passionné par les dernières innovations en développement web et les nouvelles technologies.",
    },
    {
        id: 2,
        title: "Développement Personnel",
        icon: "heroicons:academic-cap",
        description: "Apprentissage continu et développement de nouvelles compétences techniques et soft skills.",
    },
    {
        id: 4,
        title: "Design & Créativité",
        icon: "ic:baseline-color-lens",
        description: "Sensibilité artistique, design d'interfaces et création de contenus visuels.",
    }
]

const hobbies = [
    {
        id: 1,
        name: "Musique",
        icon: "heroicons:musical-note"
    },
    {
        id: 2,
        name: "Gaming",
        icon: "heroicons:puzzle-piece"
    }
]
</script>