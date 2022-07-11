import { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const MobileNavBar = () => {
    const [hideBar, setHideBar] = useState(true);
    return (
        <>
            {!hideBar && <nav className="mobile_nav_container">
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/contact">Contact</Link>
                <Link className="link" to="/about">About</Link>
                <button className='nav_btn' onClick={() => setHideBar(true)}>
                    <CloseIcon fontSize='large' />
                </button>
            </nav>}
            {hideBar && <button className="nav_btn" onClick={() => setHideBar(false)}>
                <MenuIcon fontSize='large' />
            </button>}
        </>
    )
}

export default MobileNavBar;