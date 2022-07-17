import { useState, useEffect } from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
import MobileNavBar from './MobileNavBar';
import Search from '../components/Search';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));

        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth))
        }
    }, [width])

    return (
        <header className="header_container">
            <img
                src={`${process.env.PUBLIC_URL}/suli-logo.png`}
                alt="suli-logo"
                className="logo"
            />
            <Search navigate={navigate} />
            <div>
                {width > 780 ? <Navbar />
                    : <MobileNavBar />
                }
            </div>
        </header>
    )
}

export { Header };