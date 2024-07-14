import { useState, useEffect } from "react";

function News() {
  const [post, setPost] = useState(null);
  let i = 0;
  useEffect(() => {
    const fetchNews = async (postID) => {
      const getPost = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}`
      );
      const postGot = await getPost.json();
      setPost(postGot);
    };

    const NewInterval = setInterval(() => {
      fetchNews(i);
      i++;
    }, 3000);
    return () => {
      clearInterval(NewInterval);
      setPost(null);
    };
  }, [i]);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
        </div>
      ) : (
        <p>Carregando post</p>
      )}
    </div>
  );
}

export default News;
