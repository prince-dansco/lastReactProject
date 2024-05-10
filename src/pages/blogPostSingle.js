import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/contextProvider";
import axios from "axios";

const BlogPostSingle = () => {
  const { id } = useParams();
  const {
    setPostId,
    DeleteFunction,
    error,
    setError
    
  } = useContext(AuthContext);
  const [single, setSingle] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/record/${id}`)
      .then((res) => {
        setSingle(res.data);
        setPostId(res.data.id);
        console.log(res.data);
      })
      .catch((e) => {
        console.log("fail to fetch", e);
      });
  }, [id, setPostId]);

  const handleDelete = async () => {
    try {
      await DeleteFunction(id, setError);
      navigate("/successM");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="single-content move-left-to-center">
      <h2> Title: <span>{single.title}</span></h2>
      <h2> Description: <span>{single.description}</span></h2>
      <h2> Language: <span>{single.language}</span></h2>
      <div className="">
        <button onClick={handleDelete} className="single-btn">Delete</button>
        <Link to={`/blogs/${id}`} className="single-btn2">
          <button>Edit</button>
        </Link>
        {/*  */}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Link to="/about" className="bactto">go back</Link>
    </div>
  );
};

export default BlogPostSingle;
