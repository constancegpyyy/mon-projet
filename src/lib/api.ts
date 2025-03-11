const API_URL = "https://monhistoireunique.com/wp-json/wp/v2/posts?_embed&per_page=5";

export async function getPosts(page = 1) {
  try {
    const response = await fetch(`${API_URL}&page=${page}`);

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
