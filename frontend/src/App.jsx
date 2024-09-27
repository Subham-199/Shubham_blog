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

  return (
    <div>
      {/* Show Navbar and Footer only for non-protected routes */}
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        {/* Home page is accessible for everyone */}
        <Route exact path="/" element={<Home />} />

        {/* Public Routes: Blogs list and blog detail page */}
        <Route exact path="/blogs" element={<Blogs />} />  {/* Blogs list accessible to everyone */}
        <Route exact path="/blog/:id" element={<Detail />} />  {/* Blog detail accessible to everyone */}

        {/* Public Pages */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        {/* Protected Routes: Require authentication */}
        <Route
          exact
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} // Protect Dashboard
        />
        <Route
          exact
          path="/blog/update/:id"
          element={isAuthenticated ? <UpdateBlog /> : <Navigate to="/login" />} // Protect Update Blog
        />

        {/* Catch-all for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
