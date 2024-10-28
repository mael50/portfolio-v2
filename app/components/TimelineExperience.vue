<template>
    <div class="space-y-6">
        <SectionTitle icon="heroicons:briefcase" title="Expérience Professionnelle" />

        <div class="relative">
            <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            <div class="space-y-12">
                <TimelineItem v-for="experience in experienceList" :key="experience.id" :data="experience" />
            </div>
        </div>
    </div>
</template>

<script setup>
const experienceList = [
    {
        id: 1,
        date: "Septembre 2024-Présent",
        title: "Alternant développeur web",
        company: "Optimum Circle",
        location: "Saint-Contest, France",
        description: "Développement d'applications web complexes.",
        achievements: [
            "Développement de nouvelles fonctionnalités",
            "Optimisation des performances",
            "Maintenance de l'application",
        ],
        skills: ["Symfony", "Twig", "Bootstrap", "Docker"]
    },
    {
        id: 2,
        date: "Mars 2024 - Août 2024",
        title: "Stage développeur web",
        company: "Motin SAS",
        location: "Saint-Gilles, France",
        description: "Développement web et support informatique.",
        achievements: [
            "Développement des sites vitrines",
            "Support technique aux collaborateurs",
            "Veille technologique",
            "Réalisation de prise de vue photo/vidéo",
            "Gestion des réseaux sociaux"
        ],
        skills: ["React", "Strapi", "Symfony", "Tailwind CSS"]
    },
    {
        id: 3,
        date: "Avril 2023 - Juin 2023",
        title: "Stage développeur web",
        company: "Proxiigen",
        location: "Gouville sur Mer, France",
        description: "Développement de la plateforme Proxiigen.",
        achievements: [
            "Développement de nouvelles fonctionnalités",
            "Retours clients",
            "Développement d'une plateforme de monitoring",
        ],
        skills: ["Symfony", "CodeIgniter", "Bootstrap", "jQuery"]
    },
]
</script>