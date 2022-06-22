import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>B<span className="navbar-logo">l</span>og</h1></Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: 'white',
          backgroundColor: '#BB6464',
          borderRadius: '8px',
          padding: '10px'
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;
