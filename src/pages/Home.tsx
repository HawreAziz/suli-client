import "../styles/Home.css";
import Category from "../components/Category";
import Feature from "../components/Feature";


const Home = () => {

    const Advertisment = () => {
        return (
            <div
                onClick={() => console.log('go to addvertisment')}
                className="addvertisment"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/addvertisment.png)`,
                    backgroundSize: '100% 100%',
                }}
            />
        );
    }

    return (
        <div style={{ width: '100%' }}>
            <div style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/chineesetour.jpg)`,
                // backgroundSize: 'cover',
                backgroundSize: '100% 100%',
                // backgroundPosition: '100% center'
            }}
                className="banner" >
                <h1>Find the Hidden Gems in Slemani</h1>
            </div>
            <Category />
            <Feature />
            <Advertisment />
        </div >
    )
}

export default Home;