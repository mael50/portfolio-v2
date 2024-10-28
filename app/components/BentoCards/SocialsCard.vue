<template>
    <BentoCard size="small">
        <div class="flex justify-around">
            <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank"
                class="p-2 hover:text-primary-500 transition-colors">
                <UIcon :name="link.icon" class="w-6 h-6" />
            </a>
        </div>
    </BentoCard>
</template>

<script setup>
const socialLinks = [
    { name: 'GitHub', icon: 'i-simple-icons-github', url: 'https://github.com/votre-compte' },
    { name: 'LinkedIn', icon: 'i-simple-icons-linkedin', url: 'https://linkedin.com/in/votre-profil' },
    { name: 'Twitter', icon: 'i-simple-icons-twitter', url: 'https://twitter.com/votre-compte' }
]
</script>