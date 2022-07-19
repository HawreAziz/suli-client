import { useEffect, useState } from 'react';
import { categories } from "../dataContainer";
import '../styles/Search.css';
import { Feature, restaurants } from '../data';
import Card from '../components/Card';
import { useNavigate, useParams } from "react-router-dom";


const Search = () => {
    const [features, setFeatures] = useState(restaurants);
    const navigate = useNavigate();
    const { tag } = useParams<{ tag: string }>();


    useEffect(() => {
        if (tag) {
            setFeatures(features.filter(feature => feature.tag === tag));
        }
    }, [tag])





    const getCategories = () => {
        return categories.map((category, index) => {
            return (
                <p
                    key={index}
                    style={{ color: category.bgColor, whiteSpace: 'nowrap' }}
                    onClick={() => setFeatures(restaurants.filter(res => res.tag === category.tag))}
                >
                    {category.categoryName}
                </p>
            );
        })
    }


    return (
        <div className="search_container">
            <div className='search_categories'>
                <button className="category_btn" onClick={() => setFeatures(restaurants)}>All</button>
                {getCategories()}
            </div>
            {

                <div className='search_card_container'>
                    {features.length > 0 ? features.map((restaurant: Feature, index) => {
                        return <Card key={index} feature={restaurant} navigate={navigate} />;

                    }) : (<div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '400px',
                    }}>
                        <h1>Currently not available</h1>
                    </div>)
                    }
                </div>
            }
            {/* create pagination */}
        </div >
    )
}

export default Search;