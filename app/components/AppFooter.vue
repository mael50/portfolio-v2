<template>
    <div>
        <!-- Footer -->
        <footer class="bg-transparent transition-colors duration-300 py-6">
            <div class="text-center mb-4">
                <NuxtLink to="/"
                    class="text-xl font-semibold tracking-tighter text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    _maellaroque.fr
                </NuxtLink>
            </div>

            <!-- Menu Simplifié -->
            <nav class="flex justify-center space-x-6 mb-4">
                <NuxtLink v-for="item in mainNavItems" :key="item.href" :to="item.href"
                    class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                    {{ item.label }}
                </NuxtLink>
            </nav>

            <!-- Copyright et mentions légales -->
            <div class="text-center text-xs text-gray-500 dark:text-gray-400">
                &copy; {{ new Date().getFullYear() }} Maël Laroque. Tous droits réservés.
                <NuxtLink to="/mentions-legales" class="hover:text-primary-600 dark:hover:text-primary-400">
                    Mentions légales
                </NuxtLink>
            </div>
        </footer>
    </div>
</template>