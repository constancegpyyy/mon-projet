const API_URL = "https://monhistoireunique.com/wp-json/wp/v2/posts";

/**
 * Fonction pour récupérer les articles WordPress via l'API REST
 */
export async function getPosts() {
  try {
    const response = await fetch(API_URL);

    // Vérifier si la requête est réussie
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Erreur lors de la récupération des articles :", error);
    return [];
  }
}
