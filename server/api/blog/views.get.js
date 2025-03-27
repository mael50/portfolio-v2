// API endpoint pour récupérer le compteur de vues d'un article
import { getViewCount } from '../../utils/viewCounter'

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const { slug } = query
    
    if (!slug) {
      return createError({
        statusCode: 400,
        message: 'Le slug de l\'article est requis'
      })
    }
    
    const viewCount = await getViewCount(slug)
    
    return {
      success: true,
      viewCount
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du compteur de vues:', error)
    return createError({
      statusCode: 500,
      message: 'Erreur lors de la récupération du compteur de vues'
    })
  }
})