import "../styles/Home.css";
import Category from "../components/Category";
import Feature from "../components/Feature";
import Advertisment from "../components/Advertisment";


const Home = () => {

    return (
        <div style={{ width: '100%' }}>
            <>
                <img
                    style={{
                        width: '100%',
                        height: '600px',
                        objectFit: 'cover',
                        marginTop: '5rem'
                    }}
                    src={`${process.env.PUBLIC_URL}/res5.jpg`} alt="logo" />
            </>
            <Category />
            <Feature />
            <Advertisment />
        </div >
    )
}

export default Home;