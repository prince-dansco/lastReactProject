import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  const [blogs, setBlogs] = useState([]);
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
      })
      .catch((e) => console.log(e));
  }, []);

  console.log(blogs);
  return (
    <div className="d-flex">
      {blogs &&
        blogs.map((blog, index) => {
          const { title, language, description, id } = blog;
          return (
            <div key={index} className="my-card move-left-to-center">
              <h1 className="">Title: {title}</h1>
              <h2>Language: {language}</h2>
              <h2>Description: {description}</h2>
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
