import { Link } from 'react-router-dom';
import { categories } from '../dataContainer';
import CopyrightIcon from '@mui/icons-material/Copyright';
import "../styles/Footer.css";


const Footer = () => {
    return (
        <div className="footer_container">
            <Link className="link" to="/home">Home</Link>
            <h1 className="link">Categories</h1>
            <div className="link_container">
                {categories.map((category, index) => {
                    return <Link
                        key={index}
                        className="under_link"
                        to='/search'>{category.categoryName}</Link>
                })}
            </div>
            <Link className='link' to="/about">About</Link>
            <Link className="link" to="/contact">Contact</Link>
            <div className="copyright">
                <p>Copyright</p>
                <CopyrightIcon sx={{ fontSize: '15px' }} />
                <p>{process.env.LAST_UPDATED}</p>
                <p>2022</p>
            </div>
        </div>
    )
}

export default Footer;