<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroProfile />

        <nav class="flex flex-wrap justify-center space-x-4 my-8">
            <button v-for="section in sections" :key="section.id" @click="activeSection = section.id"
                class="w-full sm:w-auto px-4 py-2 rounded-lg transition-all duration-200 hover:bg-primary-100 dark:hover:bg-primary-900 text-sm sm:text-base"
                :class="{
                    'bg-primary-100 dark:bg-primary-900 font-medium': activeSection === section.id,
                    'bg-transparent': activeSection !== section.id
                }">
                <div class="flex items-center gap-2">
                    <Icon :name="section.icon" class="w-5 h-5" />
                    {{ section.name }}
                </div>
            </button>
        </nav>

        <div class="relative min-h-[400px]">
            <TransitionGroup enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 translate-x-8" enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-300 ease-in absolute w-full"
                leave-from-class="opacity-100 translate-x-0" leave-to-class="opacity-0 -translate-x-8">
                <!-- Section Formation -->
                <div v-show="activeSection === 'education'" :key="'education'" class="w-full">
                    <TimelineEducation />
                </div>

                <!-- Section Expérience -->
                <div v-show="activeSection === 'experience'" :key="'experience'" class="w-full">
                    <TimelineExperience />
                </div>

                <!-- Section Centres d'intérêt -->
                <div v-show="activeSection === 'interests'" :key="'interests'" class="w-full">
                    <PersonalInterests />
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
const sections = [
    {
        id: 'education',
        name: 'Formation',
        icon: 'heroicons:academic-cap'
    },
    {
        id: 'experience',
        name: 'Expérience',
        icon: 'heroicons:briefcase'
    },
    {
        id: 'interests',
        name: 'Centres d\'intérêt',
        icon: 'heroicons:heart'
    }
]

const activeSection = ref('education')
</script>

<style scoped>
.absolute {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
}
</style>