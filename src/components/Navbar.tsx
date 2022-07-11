import { Link } from 'react-router-dom';
import "../styles/Header.css";


const Navbar = () => {
    return (
        <nav className="nav_container">
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/contact">Contact</Link>
            <Link className="link" to="/about">About</Link>
        </nav>
    );
}


export default Navbar;