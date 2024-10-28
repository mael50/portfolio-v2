<template>
    <div class="container mx-auto min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto space-y-16">
            <!-- En-tête -->
            <div class="space-y-6 text-center">
                <SectionTitle icon="heroicons:code" title="Mes Compétences" />
                <p class="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Voici un aperçu des technologies et outils que j'utilise régulièrement, et dans lesquels je suis
                    le plus à l'aise.
                </p>
            </div>

            <!-- Sections des compétences -->
            <div class="space-y-24">
                <div v-for="(stack, index) in stacks" :key="stack.id" class="relative">
                    <!-- Décoration d'arrière-plan -->
                    <div class="absolute inset-0 -z-10">
                        <div
                            :class="`absolute inset-y-0 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-3/4 rounded-3xl opacity-50`">
                        </div>
                    </div>

                    <div class="relative grid gap-8 lg:grid-cols-3 items-center">
                        <!-- Titre de la catégorie -->
                        <div :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'">
                            <div class="flex flex-col items-center space-y-4 text-center lg:text-left">
                                <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                                    {{ stack.name }}
                                </h2>
                                <div class="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
                            </div>
                        </div>

                        <!-- Grille de compétences -->
                        <div :class="`lg:col-span-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`">
                            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <div v-for="skill in stack.skills" :key="skill.name"
                                    class="group relative p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <UIcon :name="skill.logo"
                                                class="w-10 h-10 text-primary-500 dark:text-primary-400 transform group-hover:scale-110 transition-transform duration-300" />
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-lg font-semibold text-gray-900 dark:text-white truncate">
                                                {{ skill.name }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const stacks = [
    {
        id: 'front',
        name: 'Front-end',
        skills: [
            { name: 'Vue.js', logo: 'vscode-icons:file-type-vue' },
            { name: 'Nuxt.js', logo: 'vscode-icons:file-type-nuxt' },
            { name: 'React', logo: 'vscode-icons:file-type-reactjs' },
            { name: 'JavaScript', logo: 'vscode-icons:file-type-js-official' },
            { name: 'TypeScript', logo: 'vscode-icons:file-type-typescript-official' },
            { name: 'Tailwind CSS', logo: 'vscode-icons:file-type-tailwind' },
            { name: 'Bootstrap', logo: 'devicon:bootstrap' },
            { name: 'Sass', logo: 'vscode-icons:file-type-sass' },
            { name: 'Three.js', logo: 'devicon:threejs' },
            { name: 'Stimulus', logo: 'logos:stimulus-icon' },
        ]
    },
    {
        id: 'back',
        name: 'Back-end',
        skills: [
            { name: 'PHP', logo: 'vscode-icons:file-type-php' },
            { name: 'Symfony', logo: 'vscode-icons:file-type-symfony' },
            { name: 'Node.js', logo: 'vscode-icons:file-type-node' },
            { name: 'MySQL', logo: 'vscode-icons:file-type-mysql' },
            { name: 'Python', logo: 'vscode-icons:file-type-python' },
        ]
    },
    {
        id: 'other',
        name: 'Autres',
        skills: [
            { name: 'Git', logo: 'vscode-icons:file-type-git' },
            { name: 'GitHub', logo: 'devicon:github' },
            { name: 'Docker', logo: 'vscode-icons:file-type-docker2' },
            { name: 'Figma', logo: 'devicon:figma' },
            { name: 'Photoshop', logo: 'devicon:photoshop' },
            { name: 'Illustrator', logo: 'logos:adobe-illustrator' },
            { name: 'Premiere Pro', logo: 'logos:adobe-premiere' },
            { name: 'WordPress', logo: 'devicon:wordpress' },
            { name: 'Woocommerce', logo: 'devicon:woocommerce-wordmark' },
            { name: 'SEO', logo: 'tabler:seo' },
        ]
    }
]
</script>

<style scoped>
.dark .dark\:from-primary-900\/20 {
    --tw-gradient-from: rgb(17 24 39 / 0.2);
}

.group:hover {
    transform: translateY(-4px);
}
</style>