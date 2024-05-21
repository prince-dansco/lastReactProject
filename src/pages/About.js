import React, { useContext, useEffect, useState } from "react";
import "../cssPages/about.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Spiner from "../component/Spiner";

const AboutUs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    axios
      .get("/record", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.results.length === 0) {
          setError(
            "No blog items found. Please go to the 👉blog page👈 and add a new blog post.🌟🔥"
          );
        } else {
          setBlogs(res.data.results);
          setError(null);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        if (e.response) {
          setError(
            e.response.data.message || "something went wrong please try again"
          );
        } else if (e.request) {
          setError("No internet conection!");
        } else {
          setError("Error :" + e.message);
        }
        setIsLoading(false);
        console.log(e);
      });
  }, []);

  console.log(blogs);
  return (
    <div className="about-container">
      {isLoading && <Spiner />}
      {error && <p>Error: {error}</p>}

      {blogs &&
        blogs.map((blog, index) => {
          const { title, language, description, id } = blog;
          return (
            <div key={index} className="card move-left-to-center">
              <div className="text-container">
                <h1 className="">
                  Title:<span>{title}</span>
                </h1>
                <h2>
                  Language: <span>{language}</span>
                </h2>
                <h2>
                  Description: <span>{description}</span>
                </h2>
                <NavLink to={`/single/${id}`}>
                  <button>View More</button>
                </NavLink>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default AboutUs;
