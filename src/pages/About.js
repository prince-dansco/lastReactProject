import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
        setBlogs(res.data.results);
        setIsLoading(false);
        setError(null);
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
    <div className="d-flex">
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {blogs &&
        blogs.map((blog, index) => {
          const { title, language, description, id } = blog;
          return (
            <div key={index} className="my-card move-left-to-center">
              <h1 className="">
                Title:<span>{title}</span>{" "}
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
          );
        })}
    </div>
  );
};

export default AboutUs;
