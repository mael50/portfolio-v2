<template>
  <div ref="counterRef" class="flex items-center text-gray-500 dark:text-gray-400 text-sm">
    <Icon name="mdi:eye-outline" class="mr-1" />
    <span>{{ formattedViews }}</span>
  </div>
</template>

<script setup>
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
  slug: {
    type: String,
    required: true
  },
  autoIncrement: {
    type: Boolean,
    default: true
  }
})

const viewCount = ref(0)
const formattedViews = computed(() => {
  if (viewCount.value < 1000) return viewCount.value
  return `${(viewCount.value / 1000).toFixed(1)}k`
})

// Récupérer le nombre de vues
async function fetchViewCount() {
  try {
    const { data } = await useFetch(`/api/blog/views?slug=${props.slug}`)
    if (data.value && data.value.success) {
      viewCount.value = data.value.viewCount
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du compteur de vues:', error)
  }
}

// Incrémenter le nombre de vues
async function incrementViews() {
  if (!props.autoIncrement) return
  
  try {
    const { data } = await useFetch('/api/blog/views', {
      method: 'POST',
      body: { slug: props.slug }
    })
    
    if (data.value && data.value.success) {
      viewCount.value = data.value.viewCount
    }
  } catch (error) {
    console.error('Erreur lors de l\'incrémentation du compteur de vues:', error)
  }
}

const counterRef = ref(null)

onMounted(async () => {
  // Si autoIncrement est activé, on incrémente directement
  if (props.autoIncrement) {
    await incrementViews()
  } else {
    // Sinon on récupère juste le compteur
    await fetchViewCount()
  }
})

// Assurer que le compteur est récupéré quand le composant est visible
// même sur les pages de liste où plusieurs compteurs sont affichés
const { isVisible } = useElementVisibility(counterRef)
watch(isVisible, async (visible) => {
  if (visible && !props.autoIncrement && viewCount.value === 0) {
    await fetchViewCount()
  }
})
</script>