import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./component/NavBar";
import About from "./pages/About";
import Services from "./pages/Services";
import ErrorCom from "./component/ErrorCom";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import ContextProvider from "./context/contextProvider";
import LogIn from "./context/logIn";
import SignUp from "./context/SignUp";
import ProtectRoute from "./protectRoute";
import BlogPostSingle from "./pages/blogPostSingle";
import SuccessM from "./pages/successM";
import AddBlog from "./pages/addBlog";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <ContextProvider>
            <NavBar />
          </ContextProvider>
        }
      >
        <Route path="/" exact element={<Home />} />
        <Route element={<ProtectRoute/>}>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blogs/:id" element={<AddBlog />} />
        <Route path="service" element={<Services />} />
        <Route path="successM" element={<SuccessM />} />
        <Route path="single/:id" element={<BlogPostSingle />} />
        <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<ErrorCom />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
