import React, { useContext, useEffect, useState } from "react";
import "../cssPages/blog.css";	
import { AuthContext } from "../context/contextProvider";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddBlog = () => {
  const navigate=useNavigate()
  const { error, blogPost, EditFunction, edit, setEdite}=
    useContext(AuthContext);
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    description: "",
    language: "",
  });
console.log(post);
  useEffect(() => {
    
      const userToken = localStorage.getItem("token");
      axios
        .get(`/record/${id}`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setPost((prev) => ({ ...prev, ...res.data }));
        })
        .catch((e) => console.log(e));
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
if (post.language === "" || post.description === "" || post.title === "") {
      alert("please enter something");
    } else {
      EditFunction(id, post);
      navigate('/about')
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

export default AddBlog;
