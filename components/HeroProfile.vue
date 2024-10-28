<template>
    <div class="flex flex-col md:flex-row items-center gap-8 mb-12">
        <!-- Photo de profil -->
        <div class="relative w-48 h-48 md:w-64 md:h-64">
            <div class="absolute inset-0 bg-primary-500/20 rounded-full blur-lg"></div>
            <img src="/images/memoji.png" alt="Photo de profil"
                class="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-lg" />
        </div>

        <!-- Texte de présentation -->
        <div class="flex-1 text-center md:text-left space-y-4">
            <h1 class="text-4xl font-bold text-gray-900 dark:text-white">
                Maël Laroque
                <span class="inline-block">
                    <UIcon name="heroicons:hand-raised" class="w-8 h-8 text-yellow-400 animate-wave" />
                </span>
            </h1>

            <h2 class="text-xl text-primary-600 dark:text-primary-400 font-medium">
                Développeur Web Full Stack
            </h2>

            <p class="text-gray-600 dark:text-gray-300 max-w-2xl">
                Passionné par le développement web et les nouvelles technologies, je conçois et développe des
                applications
                web modernes et performantes. Mon approche combine créativité technique et sens du détail pour créer des
                expériences utilisateur exceptionnelles.
            </p>

            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
                <ContactButton icon="heroicons:envelope" label="Contact" href="mailto:votre@email.com" />
                <ContactButton icon="heroicons:document" label="CV" href="/cv.pdf" />
                <SocialLinks />
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-wave {
    animation: wave 2s infinite;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
    }

    10% {
        transform: rotate(14deg);
    }

    20% {
        transform: rotate(-8deg);
    }

    30% {
        transform: rotate(14deg);
    }

    40% {
        transform: rotate(-4deg);
    }

    50% {
        transform: rotate(10deg);
    }

    60% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>