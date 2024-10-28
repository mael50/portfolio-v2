<template>
    <BentoCard size="large" class="relative overflow-hidden group p-6">
        <h2 class="text-2xl font-bold mb-6">Mes repos publics</h2>
        <Swiper :modules="modules" :slides-per-view="1" :space-between="30" :navigation="false" :pagination="false"
            :loop="true" :autoplay="{ delay: 3000 }" class="w-full">
            <SwiperSlide v-for="repo in repos" :key="repo.id">
                <div class="repo-card bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <h3 class="text-xl font-semibold mb-4">{{ repo.name }}</h3>
                    <p class="text-gray-300 mb-4 min-h-[60px]">
                        {{ repo.description || "Aucune description disponible" }}
                    </p>
                    <div class="flex items-center gap-2">
                        <UIcon :name="getTechLogo(repo.language)" class="w-6 h-6" />
                        <span>{{ repo.language || "Non spécifié" }}</span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </BentoCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const repos = ref([]);
const modules = [Autoplay, Navigation];

const getTechLogo = (language) => {
    // Mapping des logos par langage
    const logos = {
        JavaScript: 'vscode-icons:file-type-js',
        TypeScript: 'vscode-icons:file-type-ts',
        HTML: 'vscode-icons:file-type-html',
        CSS: 'vscode-icons:file-type-css',
        Vue: 'vscode-icons:file-type-vue',
        Shell: 'vscode-icons:file-type-shell',
        Python: 'vscode-icons:file-type-python',
        Java: 'vscode-icons:file-type-java',
        C: 'vscode-icons:file-type-c',
        Cpp: 'vscode-icons:file-type-cpp',
        PHP: 'vscode-icons:file-type-php',
        Ruby: 'vscode-icons:file-type-ruby',
        'C#': 'vscode-icons:file-type-csharp',
        Swift: 'vscode-icons:file-type-swift',
        Kotlin: 'vscode-icons:file-type-kotlin',
        Dart: 'vscode-icons:file-type-dart',
        Go: 'vscode-icons:file-type-go',
        Rust: 'vscode-icons:file-type-rust',
        Scala: 'vscode-icons:file-type-scala',
    };

    return logos[language] || 'vscode-icons:file-type-code';
};

const fetchGitHubRepos = async () => {
    try {
        const response = await fetch('https://api.github.com/users/mael50/repos');
        if (response.ok) {
            const data = await response.json();
            repos.value = data;
        } else {
            console.error('Erreur lors de la récupération des dépôts GitHub :', response.statusText);
        }
    } catch (error) {
        console.error('Erreur lors de la requête API GitHub :', error);
    }
};

onMounted(() => {
    fetchGitHubRepos();
});
</script>

<style scoped>
.swiper {
    padding: 1rem;
}

.repo-card {
    transition: all 0.3s ease;
    border: 1px solid #ccc;
    /* Bordure pour le thème clair */
}

.repo-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: white;
}
</style>