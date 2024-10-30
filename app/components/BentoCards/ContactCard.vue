<template>
    <BentoCard size="large" class="overflow-hidden group hover:shadow-lg transition-all duration-300">
        <nuxt-link to="/contact" class="absolute inset-0 z-10">
            <div
                class="h-full w-full flex flex-col p-4 md:p-8 relative hover:bg-gradient-to-br from-primary/5 hover:to-primary/10 transition-all duration-300 rounded-lg">
                <!-- Contenu principal -->
                <div class="flex flex-col md:flex-row items-center flex-1">
                    <div class="flex-1 flex flex-col justify-center w-full md:w-1/2 mb-4 md:mb-0">
                        <div
                            class="text-2xl md:text-4xl font-bold transform group-hover:scale-105 transition-transform duration-300">
                            Restons
                            <br />
                            en
                            <span class="text-primary relative inline-block">
                                contact
                                <span
                                    class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300">
                                </span>
                            </span>
                        </div>
                    </div>

                    <div class="flex items-center w-full md:w-1/2">
                        <div class="relative transform group-hover:-rotate-12 transition-transform duration-300">
                            <div
                                class="absolute -inset-4 bg-primary/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-fit h-fit">
                            </div>
                            <UIcon name="ic:baseline-handshake"
                                class="w-16 md:w-20 h-16 md:h-20 text-primary relative z-10 group-hover:scale-110 transition-all duration-300" />
                        </div>
                    </div>
                </div>

                <!-- Séparateur -->
                <div
                    class="w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-4 md:my-6 opacity-50">
                </div>

                <!-- Réseaux sociaux -->
                <div class="flex justify-center gap-6 pt-2">
                    <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer"
                        class="group/icon relative">
                        <div
                            class="absolute -inset-2 bg-gray-100 dark:bg-gray-800 rounded-full opacity-0 group-hover/icon:opacity-100 transition-all duration-300 scale-50 group-hover/icon:scale-100">
                        </div>
                        <UIcon name="mdi:github"
                            class="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary relative z-10 transition-colors duration-300" />
                    </a>

                    <a href="https://linkedin.com/in/votre-profile" target="_blank" rel="noopener noreferrer"
                        class="group/icon relative">
                        <div
                            class="absolute -inset-2 bg-gray-100 dark:bg-gray-800 rounded-full opacity-0 group-hover/icon:opacity-100 transition-all duration-300 scale-50 group-hover/icon:scale-100">
                        </div>
                        <UIcon name="mdi:linkedin"
                            class="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary relative z-10 transition-colors duration-300" />
                    </a>

                    <a href="https://behance.net/votre-profile" target="_blank" rel="noopener noreferrer"
                        class="group/icon relative">
                        <div
                            class="absolute -inset-2 bg-gray-100 dark:bg-gray-800 rounded-full opacity-0 group-hover/icon:opacity-100 transition-all duration-300 scale-50 group-hover/icon:scale-100">
                        </div>
                        <UIcon name="mdi:behance"
                            class="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary relative z-10 transition-colors duration-300" />
                    </a>
                </div>

                <LinkIcon />
            </div>
        </nuxt-link>
    </BentoCard>
</template>