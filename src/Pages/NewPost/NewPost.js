import NavBar from "../../Components/Navbar/NavBar";
import { CreatePostContainer} from "./Style";
import blogFetch from "../../Config/Config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewPost() {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = {title, body, userId: 1};

    await blogFetch.post("/posts", {
      body: post,
    })
  }

  return (
    <>
      <NavBar />
      <CreatePostContainer>
      <h2>Insert new Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="body">description:</label>
          <textarea
            type="text"
            name="body"
            id="body"
            placeholder="Enter the description"
            onChange={(e) => setBody(e.target.value)}
          />

          <button type="submit" value="Create Post" className="btn">Create</button>

        </div>
      </form>
    </CreatePostContainer>
    </>
  );
}

export default NewPost;