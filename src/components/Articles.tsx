const Articles: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
  
    useEffect(() => {
      getPosts().then(setPosts);
    }, []);
  
    return (
      <section className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Derniers Articles</h1>
        <ul className="space-y-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <li key={post.id} className="bg-white shadow-lg p-6 rounded-lg">
                <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <img className="w-full h-48 object-cover rounded-md mt-4" src={post._embedded["wp:featuredmedia"][0].source_url} alt="Image de l'article" />
                )}
                <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium mt-4 inline-block">
                  Lire l'article →
                </a>
              </li>
            ))
          ) : (
            <p className="text-center text-gray-600">Aucun article disponible.</p>
          )}
        </ul>
      </section>
    );
  };
  const Articles: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
  
    useEffect(() => {
      getPosts(page).then(newPosts => {
        setPosts(prev => [...prev, ...newPosts]);
        if (newPosts.length < 5) setHasMore(false);
      });
    }, [page]);
  
    return (
      <section className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Derniers Articles</h1>
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id} className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img className="w-full h-48 object-cover rounded-md mt-4" src={post._embedded["wp:featuredmedia"][0].source_url} alt="Image de l'article" />
              )}
              <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-medium mt-4 inline-block">
                Lire l'article →
              </a>
            </li>
          ))}
        </ul>
        {hasMore && (
          <button 
            onClick={() => setPage(prev => prev + 1)}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-6 block mx-auto"
          >
            Charger plus d'articles
          </button>
        )}
      </section>
    );
  };
  