<template>
    <div :class="[
        'rounded-3xl p-6 transition-all duration-300',
        'bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-800 dark:to-zinc-850',
        'border border-gray-100 dark:border-gray-800',
        'backdrop-blur-sm',
        responsiveSizeClasses,
        $attrs.class
    ]">
        <slot />
    </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large', 'wide', 'tall'].includes(value)
    }
})

// Définition des classes de taille responsive
const responsiveSizeClasses = computed(() => {
    const baseClasses = {
        small: 'col-span-1 row-span-1',
        medium: 'col-span-1 row-span-2',
        large: 'col-span-2 row-span-2',
        wide: 'col-span-2 row-span-1',
        wide_large: 'col-span-full row-span-2',
        tall: 'col-span-1 row-span-3'
    }

    const mobileClasses = 'col-span-full'
    const tabletClasses = {
        small: 'sm:col-span-full sm:row-span-1',
        medium: 'sm:col-span-2 sm:row-span-2',
        large: 'sm:col-span-full sm:row-span-2',
        wide: 'sm:col-span-full sm:row-span-2',
        wide_large: 'sm:col-span-full sm:row-span-2',
        tall: 'sm:col-span-1 sm:row-span-3'
    }
    const desktopClasses = {
        small: 'md:col-span-1 md:row-span-1',
        medium: 'md:col-span-1 md:row-span-2',
        large: 'md:col-span-2 md:row-span-2',
        wide: 'md:col-span-2 md:row-span-1',
        wide_large: 'md:col-span-full md:row-span-2',
        tall: 'md:col-span-1 md:row-span-3'
    }

    return `${mobileClasses} ${tabletClasses[props.size]} ${desktopClasses[props.size]} ${baseClasses[props.size]}`
})
</script>