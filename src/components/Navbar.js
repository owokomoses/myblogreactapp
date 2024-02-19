import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
<nav className="navbar">
    <h2>Blog Post</h2>
    <div className="links">
    <Link to="/">Home</Link>
    <Link to="/Create">New Blog</Link>
    </div>
</nav>
    )
}
export default Navbar;