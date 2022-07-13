import { useState, useEffect } from 'react';
import { categories } from "../dataContainer";
import '../styles/Search.css';
import { restaurants } from '../data';
import Line from '../components/Line';


const Search = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth));
        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth));
        }
    }, [width]);

    const getCategories = () => {
        return categories.map((category, index) => {
            return (
                <p key={index} style={{ color: category.bgColor, whiteSpace: 'nowrap' }}>
                    {category.categoryName}
                </p>
            );
        })
    }

    const fetchAllCategories = () => {
        console.log('fetch all categories');
    }

    const excerp = (text: string, nrOfChars: number): string => {
        return text.length > nrOfChars
            ? text.substring(0, nrOfChars) + "..."
            : text;
    }


    return (
        <div className="search_container">
            <div className='search_categories'>
                <button className="category_btn" onClick={fetchAllCategories}>All</button>
                {getCategories()}
            </div>
            <div className='card'>
                {restaurants.map((restaurant, index) => {
                    return (
                        <div className='card_container'>
                            <img
                                className="restaurant_image"
                                src={restaurant.image} alt={restaurant.tag} />
                            <div>
                                <p style={
                                    {
                                        textTransform: 'capitalize',
                                        color: 'rgb(87, 142, 112)'
                                    }}>{restaurant.tag}</p>
                                <p style={
                                    {
                                        fontSize: '20px',
                                        marginTop: '-15px',
                                        fontWeight: 'bolder'
                                    }
                                }>{restaurant.title}</p>
                                <Line lineStyle={
                                    {
                                        width: '50px',
                                        marginTop: '-15px',
                                    }
                                } />
                                <p className='card_description'>{excerp(restaurant.description, 120)}</p>
                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                    <p style={{ color: 'green' }}>Open:</p>
                                    <p>TODO</p>
                                </div>
                            </div>
                            {index < restaurants.length - 1 &&
                                <Line lineStyle={{ width: '95%', alignSelf: 'center' }} />}
                        </div>
                    );
                })}
            </div>
            {/* create map  */}
        </div >
    )
}

export default Search;