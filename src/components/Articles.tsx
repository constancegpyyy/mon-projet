import React, { useEffect, useState } from "react";
import { getPosts } from "../lib/api";

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
}

const Articles: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <section>
      <h1>Derniers Articles</h1>
      <ul>
        {posts.length > 0 ? (
          posts.map((post) => (
            <li key={post.id}>
              <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Lire l'article
              </a>
            </li>
          ))
        ) : (
          <p>Aucun article disponible.</p>
        )}
      </ul>
    </section>
  );
};

export default Articles;
