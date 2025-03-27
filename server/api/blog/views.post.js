// API endpoint pour incrémenter le compteur de vues d'un article
import { incrementViewCount } from '../../utils/viewCounter'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { slug } = body
    
    if (!slug) {
      return createError({
        statusCode: 400,
        message: 'Le slug de l\'article est requis'
      })
    }
    
    const viewCount = await incrementViewCount(slug)
    
    return {
      success: true,
      viewCount
    }
  } catch (error) {
    console.error('Erreur lors de l\'incrémentation du compteur de vues:', error)
    return createError({
      statusCode: 500,
      message: 'Erreur lors de l\'incrémentation du compteur de vues'
    })
  }
})