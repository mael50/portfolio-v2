// Utilitaire pour gérer le compteur de vues des articles
import { useStorage } from '#imports'

/**
 * Incrémente le compteur de vues pour un article spécifique
 * @param {string} slug - Le slug de l'article
 * @returns {Promise<number>} - Le nombre total de vues après incrémentation
 */
export async function incrementViewCount(slug) {
  if (!slug) return 0
  
  // Utilisation du stockage Nitro pour persister les données
  const storage = useStorage('db')
  
  // Récupération des compteurs actuels
  const viewsData = await storage.getItem('blog:views') || {}
  
  // Incrémentation du compteur pour cet article
  const currentViews = viewsData[slug] || 0
  viewsData[slug] = currentViews + 1
  
  // Sauvegarde des données mises à jour
  await storage.setItem('blog:views', viewsData)
  
  return viewsData[slug]
}

/**
 * Récupère le compteur de vues pour un article spécifique
 * @param {string} slug - Le slug de l'article
 * @returns {Promise<number>} - Le nombre total de vues
 */
export async function getViewCount(slug) {
  if (!slug) return 0
  
  const storage = useStorage('db')
  const viewsData = await storage.getItem('blog:views') || {}
  
  return viewsData[slug] || 0
}

/**
 * Récupère tous les compteurs de vues
 * @returns {Promise<Object>} - Un objet avec les slugs comme clés et les compteurs comme valeurs
 */
export async function getAllViewCounts() {
  const storage = useStorage('db')
  return await storage.getItem('blog:views') || {}
}