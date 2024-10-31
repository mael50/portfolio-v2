<template>
    <BentoCard size="small" class="relative overflow-hidden group p-4">
        <div class="relative mb-4">
            <span class="absolute -inset-1 bg-primary-500/20 rounded-lg blur-lg"></span>
            <h2 class="relative text-xl md:text-xl font-bold text-primary-950 dark:text-white px-2 rounded-3xl">
                Top 3 Langages
                <UIcon name="mdi:podium-gold" class="w-6 h-6 text-primary-500 animate-pulse" />
            </h2>
        </div>
        <div v-if="loading" class="flex justify-center items-center h-32">
            <UIcon name="eos-icons:loading" class="animate-spin text-4xl" />
        </div>
        <div v-else class="grid grid-cols-3 gap-10">
            <div v-for="(lang, index) in topLanguages" :key="index" class="language-item text-center">
                <UIcon :name="getIconName(lang.name)" class="language-logo mx-auto" />
                <h3 class="text-md font-semibold">{{ lang.name }}</h3>
                <p class="text-sm text-gray-600">{{ lang.text }}</p>
            </div>
        </div>
    </BentoCard>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const topLanguages = ref([]);
const loading = ref(true);

const getWakatimeData = async () => {
    try {
        const response = await fetch('https://wakatime.com/share/@Zakimbo/87c77113-e325-4bf5-a1af-b15ead2caef3.json');
        const data = await response.json();
        let topLangs = data.data.slice(0, 4); // On sélectionne les 4 premiers langages pour avoir un de rechange
        topLangs = topLangs.filter(lang => lang.name !== 'Twig'); // On enlève Twig s'il est présent
        topLanguages.value = topLangs.slice(0, 3); // On prend les 3 premiers langages après filtrage
    } catch (error) {
        console.error('Erreur lors de la récupération des données Wakatime :', error);
    } finally {
        loading.value = false;
    }
};

const getIconName = (langName) => {
    const iconName = `vscode-icons:file-type-${langName.toLowerCase()}`;
    if (langName === 'JavaScript') return 'vscode-icons:file-type-js';
    if (langName === 'TypeScript') return 'vscode-icons:file-type-typescript-official';
    if (langName === 'Vue.js') return 'vscode-icons:file-type-vue';

    return iconName;
};

onMounted(() => {
    getWakatimeData();
});
</script>

<style scoped>
.language-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.language-logo {
    width: 40px;
    height: 40px;
}
</style>