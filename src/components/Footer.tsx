import { Link } from 'react-router-dom';
import { categories } from '../dataContainer';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useAppDispatch } from '../hooks/redux-hooks';
import { useNavigate } from 'react-router-dom';
import { getFeatureByTag } from '../redux/reducers/features';
import "../styles/Footer.css";


const Footer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className="footer_container">
            <Link className="link" to="/home">Home</Link>
            <h1 className="link">Categories</h1>
            <div className="link_container">
                {categories.map((category, index) => {
                    return <button
                    onClick={() => {
                        dispatch(getFeatureByTag(category.tag));
                        navigate('/search');
                    }}
                        key={index}
                        className="category_link">{category.categoryName}</button>
                })}
            </div>
            <Link className='link' to="/about">About</Link>
            <Link className="link" to="/contact">Contact</Link>
            <div className="copyright">
                <p>Copyright</p>
                <CopyrightIcon sx={{ fontSize: '15px' }} />
                <p>2022</p>
            </div>
        </div>
    )
}

export default Footer;