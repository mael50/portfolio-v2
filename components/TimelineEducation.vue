<template>
    <div class="space-y-6">
        <SectionTitle icon="heroicons:academic-cap" title="Formation" />

        <div class="relative">
            <!-- Ligne verticale -->
            <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            <!-- Items -->
            <div class="space-y-12">
                <TimelineItem v-for="education in educationList" :key="education.id" :data="education" />
            </div>
        </div>
    </div>
</template>

<script setup>
const educationList = [
    {
        id: 1,
        date: "2024-2026",
        title: "MBA Management de Projet Web & Digital",
        school: "MyDigitalSchool",
        location: "Caen, France",
        description: "Master en management de projet web et digital, en alternance.",
        skills: ["Développement Web", "Gestion de Projet", "Marketing Digital"]
    },
    {
        id: 2,
        date: "2021-2024",
        title: "B.U.T Métiers du Multimédia et de l'Internet",
        school: "Université de Caen",
        location: "Saint-Lô, France",
        description: "Spécialisation en développement web et multimédia.",
        skills: ["Développement web", "UX/UI Design"]
    },
    // Ajoutez d'autres formations selon votre parcours
]
</script>