import axios from "axios";
import Auth from "../baseURL/axiosBaseUrl";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState("");
  const [load, setLoad] = useState("");
  const [postId, setPostId] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      setToken(userToken);
      Auth(userToken);
      setIsLogin(true);
    }
  }, []);

  const handleResponse = (response) => {
    if (response.data && response.data.token) {
      localStorage.setItem("token", response.data.token);
      setError(null);
      Auth(response.data.token);
      return true;
    } else {
      setError("Error: Unexpected response from server");
      return false;
    }
  };

  const handleError = (error) => {
    if (error.response && error.response.data && error.response.data.error) {
      setError(error.response.data.error);
    } else {
      setError("Error: Oops! Sorry, unable to connect to the server");
    }
  };

  async function login(data) {
    try {
      const response = await axios.post("auth/login", data);
      if (response.status === 200) {
        if (handleResponse(response)) {
          setIsLogin(true);
          navigate("/");
        } else {
          setIsLogin(false);
        }
      } else {
        console.error("Error: Unexpected status code:", response.status);
      }
    } catch (error) {
      handleError(error);
    }
  }

  async function signup(data) {
    try {
      const response = await axios.post("auth/signup", data);
      if (handleResponse(response)) {
        navigate("/login");
      }
    } catch (error) {
      handleError(error);
    }
  }
  const blogPost = async (post) => {
    const userToken = localStorage.getItem("token");
    const response = await axios
      .post("/record/", post, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => res.data)
      .catch((e) => {
        console.log(e, "fail to fetch");
        setError(error.response);
      });
    return response;
  };
  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    setIsLogin(false);
    navigate("/signup");
    setLoad(false);
  }
 
  const DeleteFunction = async (id, setError) => {
    const userToken = localStorage.getItem("token");
    const response = await axios
      .delete(`/record/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => res.data)
      .catch((e) => {
        console.log(e, "fail to fetch");
        setError(error.response);
      });
    return response;
  }

const EditFunction = async (id, data) => {
  const userToken = localStorage.getItem("token");
  const response = await axios.put(`/record/${id}`, data, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => {
      console.log(e, "fail to fetch");
      setError(error.response);
    });
  return response;
}




  const contextValue = {
    EditFunction,
    login,
    signup,
    error,
    setError,
    isLogin,
    setIsLogin,
    logout,
    blogPost,
    load,
    postId,
    setPostId,
    DeleteFunction,
    // edit,
    // setEdit
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
