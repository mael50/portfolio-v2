<template>
    <BentoCard size="wide_large" class="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <nuxt-link to="/skills">
            <div class="flex flex-col gap-8 p-6">
                <div class="space-y-4">
                    <div class="flex items-center gap-3">
                        <div class="relative mb-2">
                            <span class="absolute -inset-1 bg-primary-500/20 rounded-lg blur-lg"></span>
                            <h2
                                class="relative text-2xl md:text-3xl font-bold text-primary-950 dark:text-white px-2 rounded-3xl">
                                Compétences en Développement Web
                                <UIcon name="heroicons:code-bracket" class="w-6 h-6 text-primary-500 animate-pulse" />
                            </h2>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Interface Utilisateur -->
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <Icon name="heroicons:window" class="w-6 h-6 text-primary-500" />
                                <h3 class="text-lg font-medium">Interface Utilisateur</h3>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300">
                                Création d'interfaces web modernes, responsive et intuitives avec une attention
                                particulière à l'expérience utilisateur
                            </p>
                        </div>

                        <!-- Architecture Backend -->
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <Icon name="heroicons:server" class="w-6 h-6 text-primary-500" />
                                <h3 class="text-lg font-medium">Architecture Backend</h3>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300">
                                Conception et développement de systèmes robustes, gestion efficace des données et des
                                API
                            </p>
                        </div>

                        <!-- Infrastructure & Déploiement -->
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <Icon name="heroicons:circle-stack" class="w-6 h-6 text-primary-500" />
                                <h3 class="text-lg font-medium">Infrastructure & Déploiement</h3>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300">
                                Mise en place et maintenance d'infrastructures cloud, automatisation des déploiements et
                                gestion des versions
                            </p>
                        </div>

                        <!-- Qualité & Performance -->
                        <div class="space-y-2">
                            <div class="flex items-center gap-2">
                                <Icon name="heroicons:shield-check" class="w-6 h-6 text-primary-500" />
                                <h3 class="text-lg font-medium">Qualité & Performance</h3>
                            </div>
                            <p class="text-gray-600 dark:text-gray-300">
                                Optimisation des performances, sécurisation des applications et mise en place de bonnes
                                pratiques de développement
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <LinkIcon />
        </nuxt-link>
    </BentoCard>
</template>

<script setup>
</script>