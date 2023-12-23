import NavBar from "../../Components/Navbar/NavBar";
import { Container } from "./Style";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import blogFetch from "../../Config/Config";

function Home() {

  const [posts, setPosts] = useState([])
  const getPost = async() => {
    try {
      const response = await blogFetch.get('/posts');
      const data = response.data;

      setPosts(data)
    }
    catch (error) {

    }
  }

  useEffect(() => {
    getPost()
  }, [])

    return (
      <>
      <NavBar/>
      <Container>
        <h1>Recent Posts</h1>
        {posts.length === 0 ? <p>Loading...</p> : (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <Link to={`/posts/${post.id}`} className="btn">Read more</Link>
            </div>
          ))
        )}
      </Container>
      </>
    );
  }
  
  export default Home;