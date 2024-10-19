<template>
    <div>
        <UHeader class="border-b bg-white dark:bg-gray-900 transition-colors duration-300" height="20">
            <div class="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                <!-- Logo -->
                <NuxtLink to="/"
                    class="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    _maellaroque.fr
                </NuxtLink>

                <!-- Navigation Desktop -->
                <nav class="hidden md:flex items-center justify-center flex-1 px-8">
                    <div class="flex items-center space-x-8">
                        <NuxtLink v-for="item in mainNavItems" :key="item.href" :to="item.href"
                            class="relative font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 py-2 transition-colors duration-300 group">
                            {{ item.label }}
                            <span
                                class="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                        </NuxtLink>
                    </div>
                </nav>

                <!-- Actions -->
                <div class="hidden md:flex items-center space-x-4">
                    <ThemeToggle />
                    <UButton to="#contact" color="primary" variant="soft"
                        class="font-medium px-6 hover:scale-105 transition-transform duration-200">
                        Contact
                    </UButton>
                </div>

                <!-- Menu Mobile Buttons -->
                <div class="flex items-center space-x-2 md:hidden">
                    <ThemeToggle />
                    <UButton v-if="!isMenuOpen" icon="i-heroicons-bars-3" color="gray" variant="ghost"
                        class="text-gray-900 dark:text-white" @click="isMenuOpen = true" aria-label="Ouvrir le menu" />
                </div>
            </div>
        </UHeader>

        <!-- Menu Mobile avec Animation -->
        <Transition enter-active-class="transition-all duration-500 ease-in-out"
            enter-from-class="transform -translate-y-full opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition-all duration-500 ease-in-out"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-full opacity-0">
            <div v-if="isMenuOpen"
                class="fixed inset-x-0 top-0 bg-white dark:bg-gray-900 z-50 md:hidden shadow-lg transition-colors duration-300">
                <div class="px-4 py-4">
                    <div class="flex items-center justify-between mb-6">
                        <NuxtLink to="/"
                            class="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            @click="isMenuOpen = false">
                            _maellaroque.fr
                        </NuxtLink>
                        <UButton icon="i-heroicons-x-mark" color="gray" variant="ghost"
                            class="text-gray-900 dark:text-white" @click="isMenuOpen = false"
                            aria-label="Fermer le menu" />
                    </div>

                    <nav class="flex flex-col items-center space-y-6 py-4">
                        <NuxtLink v-for="item in [...mainNavItems, contactItem]" :key="item.href" :to="item.href"
                            class="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            @click="isMenuOpen = false">
                            {{ item.label }}
                        </NuxtLink>
                    </nav>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
const isMenuOpen = ref(false)

const mainNavItems = [
    {
        label: 'À propos',
        href: '#about'
    },
    {
        label: 'Réalisations',
        href: '#projects'
    },
    {
        label: 'Blog',
        href: '#blog'
    }
]

const contactItem = {
    label: 'Contact',
    href: '#contact'
}
</script>