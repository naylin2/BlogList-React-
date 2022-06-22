import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>Blog</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#1d30c2',
          borderRadius: '8px'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
