import React, { useContext, useState } from "react";
import { AuthContext } from "../context/contextProvider";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  const { error, blogPost } = useContext(AuthContext);
  const [post, setPost] = useState({
    title: "",
    description: "",
    language: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (post.language === "" || post.description === "" || post.title === "") {
      alert("please enter something");
    } else {
      blogPost(post);
      navigate("/about");
    }

    console.log(post);

    setPost({
      title: "",
      description: "",
      language: "",
    });
  }
  //  const handleFocus=()=>{
  // setError('')
  //  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  return (
    <div>
      <div className="container">
        <h1 className="page-title">New post</h1>
        <form onSubmit={handleSubmit}>
          <div className=" blog-content">
            <h2>Add new post </h2>
            {error && <div>{error}</div>}
            <div className="title">
              <label htmlFor="title">title</label>
              <input
                type="text"
                onChange={handleChange}
                // onFocus={handleFocus}
                placeholder="enter title"
                name="title"
                id="title"
                value={post.title}
              />
            </div>

            <div className="language">
              <label htmlFor="title">language</label>
              <input
                type="text"
                onChange={handleChange}
                // onFocus={handleFocus}
                autoFocus
                placeholder="enter language"
                name="language"
                id="language"
                value={post.language}
              />
            </div>
            <div className="description">
              <label htmlFor="description">description</label>
              <textarea
                name="description"
                id="description"
                onChange={handleChange}
                value={post.description}
                placeholder="enter description"
                cols="61"
                // onFocus={handleFocus}"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">addpost</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Blog;
