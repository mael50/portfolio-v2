<template>
    <div
        class="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div class="max-w-7xl mx-auto">
            <!-- En-tête -->
            <SectionTitle icon="heroicons:envelope" title="Contact"
                subtitle="N'hésitez pas à me contacter pour toute demande" />

            <!-- Conteneur principal -->
            <div class="mt-12 grid lg:grid-cols-3 gap-8">
                <!-- Colonne de gauche - Informations -->
                <div class="lg:col-span-1 space-y-6">
                    <!-- Carte avec localisation -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 space-y-4">
                        <div class="relative h-48 rounded-lg overflow-hidden">
                            <LMap class="w-full h-full" :center="{ lat: 49.182863, lng: -0.370679 }" :zoom="14"
                                :options="{ zoomControl: false }">
                                <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                                <LMarker :lat-lng="{ lat: 49.182863, lng: -0.370679 }" />
                            </LMap>
                        </div>
                        <p class="text-center text-gray-600 dark:text-gray-300 font-medium">
                            14000 Caen
                        </p>
                    </div>

                    <!-- Informations de contact -->
                    <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-6">
                        <!-- Email -->
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <UIcon name="heroicons:envelope" class="w-6 h-6 text-primary-500" />
                            </div>
                            <a href="mailto:votre@email.com"
                                class="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                                votre@email.com
                            </a>
                        </div>

                        <!-- Téléphone -->
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <UIcon name="heroicons:phone" class="w-6 h-6 text-primary-500" />
                            </div>
                            <a href="tel:+33600000000" class="text-gray-600 dark:text-gray-300 hover:text-primary-500">
                                +33 6 00 00 00 00
                            </a>
                        </div>

                        <!-- Réseaux sociaux -->
                        <div class="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div class="flex justify-center gap-6">
                                <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer"
                                    class="group relative">
                                    <div
                                        class="absolute -inset-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                    </div>
                                    <UIcon name="mdi:github"
                                        class="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-primary-500 relative z-10" />
                                </a>
                                <a href="https://linkedin.com/in/votre-profile" target="_blank"
                                    rel="noopener noreferrer" class="group relative">
                                    <div
                                        class="absolute -inset-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                    </div>
                                    <UIcon name="mdi:linkedin"
                                        class="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-primary-500 relative z-10" />
                                </a>
                                <a href="https://behance.net/votre-profile" target="_blank" rel="noopener noreferrer"
                                    class="group relative">
                                    <div
                                        class="absolute -inset-2 bg-gray-100 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                    </div>
                                    <UIcon name="mdi:behance"
                                        class="w-6 h-6 text-gray-600 dark:text-gray-400 hover:text-primary-500 relative z-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Colonne de droite - Formulaire -->
                <div class="lg:col-span-2">
                    <form @submit.prevent="sendEmail"
                        class="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 space-y-6">
                        <!-- Email -->
                        <div class="space-y-2">
                            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Adresse email
                            </label>
                            <input id="email" v-model="form.email" type="email" required
                                class="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                                :disabled="loading" />
                        </div>

                        <!-- Objet -->
                        <div class="space-y-2">
                            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Objet
                            </label>
                            <input id="subject" v-model="form.subject" type="text" required
                                class="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                                :disabled="loading" />
                        </div>

                        <!-- Message -->
                        <div class="space-y-2">
                            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea id="message" v-model="form.message" rows="6" required
                                class="block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                                :disabled="loading"></textarea>
                        </div>

                        <!-- Bouton d'envoi -->
                        <div>
                            <button type="submit"
                                class="w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-300 disabled:opacity-50"
                                :disabled="loading">
                                <UIcon v-if="loading" name="heroicons:arrow-path-20-solid"
                                    class="animate-spin -ml-1 mr-2 h-4 w-4" />
                                {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const loading = ref(false)
const mail = useMail()
const form = reactive({
    email: '',
    subject: '',
    message: ''
})

async function sendEmail() {
    try {
        loading.value = true

        mail.send({
            from: form.email,
            subject: form.subject,
            text: form.message,
        })

        // Réinitialiser le formulaire
        form.email = ''
        form.subject = ''
        form.message = ''

        alert('Message envoyé avec succès!')

    } catch (error) {
        alert('Une erreur est survenue lors de l\'envoi du message.')
        console.error('Erreur:', error)
    } finally {
        loading.value = false
    }
}
</script>