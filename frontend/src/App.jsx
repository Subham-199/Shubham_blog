import React from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Footer from "../src/components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Blogs from "../src/pages/Blogs";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";
import Dashboard from "../src/pages/Dashboard";
import Creators from "./pages/Creators";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import UpdateBlog from "./dashboard/UpdateBlog";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(location.pathname);
  const { isAuthenticated } = useAuth();
  let token = localStorage.getItem("jwt");

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />} // Allow access to Home for everyone
        />
        <Route exact path="/blogs" element={<Blogs />} /> // Allow access to Blogs for everyone
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} // Protect Dashboard
        />

        {/* Single page route */}
        <Route exact path="/blog/:id" element={<Detail />} />

        {/* Update page route */}
        <Route
          exact
          path="/blog/update/:id"
          element={isAuthenticated ? <UpdateBlog /> : <Navigate to="/login" />} // Protect Update Blog
        />

        {/* Universal route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
