<template id="SkillCard">
    <div
        class="skill-card p-4 bg-white shadow-lg dark:bg-gray-800 flex items-center space-x-4 rounded-lg transition-transform transform hover:scale-105">
        <UIcon :name="skill.logo" class="w-8 h-8 text-primary-600 dark:text-primary-400" />
        <span class="text-lg font-semibold text-gray-800 dark:text-white">{{ skill.name }}</span>
    </div>
</template>

<script>
export default {
    props: {
        skill: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.skill-card:hover span {
    opacity: 1;
}

.text-primary-600 {
    color: #1a73e8;
}

.bg-white {
    background-color: #ffffff;
}

.dark\:bg-gray-800 {
    background-color: #2d3748;
}

.skill-card {
    transition: transform 0.3s ease;
}

.skill-card:hover {
    transform: scale(1.05);
}
</style>