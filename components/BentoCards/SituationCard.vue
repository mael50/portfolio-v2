<template>
    <BentoCard size="wide" class="relative overflow-hidden group">
        <NuxtMarquee :speed="40" :pauseOnHover="true" class="py-2">
            <span class="text-sm font-medium px-4">
                Actuellement en 1<sup>ère</sup> année
                <b class="text-primary">MBA Manager de projet web & digital</b>
                à Caen, j'aspire à devenir
                <b class="text-primary">Développeur Fullstack</b>.
                <UIcon name="solar:square-academic-cap-bold" class="inline-block w-4 h-4 mx-4" />
                Je suis en alternance dans l'agence web
                <b class="text-primary">
                    <a href="https://optimumcircle.com" target="_blank">Optimum Circle</a>
                </b>
                à Caen en tant que
                <b class="text-primary">Lead Developer</b>
                pour la plateforme
                <b class="text-primary">
                    <a href="https://kazaklub.com" target="_blank">KazaKlub</a>
                </b>.
            </span>
        </NuxtMarquee>
    </BentoCard>
</template>

<style scoped>
a {
    color: var(--primary);
    text-decoration: underline;
}
</style>