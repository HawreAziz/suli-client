import { useState, useEffect } from 'react';
import { categories } from "../dataContainer";
import '../styles/Search.css';
import { restaurants } from '../data';
import Card from '../components/Card';


const Search = () => {
    const [width, setWidth] = useState(window.innerWidth);

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




    return (
        <div className="search_container">

            <div className='search_categories'>
                <button className="category_btn" onClick={fetchAllCategories}>All</button>
                {getCategories()}
            </div>
            <div className='search_card_container'>
                {restaurants.map((restaurant, index) => {
                    return <Card feature={restaurant} />
                })}
            </div>
            {/* create pagination */}
        </div >
    )
}

export default Search;