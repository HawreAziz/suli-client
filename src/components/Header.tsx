import { useState, useEffect } from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
import MobileNavBar from './MobileNavBar';



const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);

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
            <div>
                {width > 780 ? <Navbar />
                    : <MobileNavBar />
                }
            </div>
        </header>
    )
}

export { Header };