import { useEffect, useState } from 'react';
import { categories } from "../dataContainer";
import '../styles/Search.css';
import { Feature } from '../data';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../hooks/redux-hooks';
import { getFeatures, getFeatureByTag } from '../redux/reducers/features';


const Search = () => {
    const { features, tag } = useAppSelector(state => state.features);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();



    useEffect(() => {
        if (!tag) {
            dispatch(getFeatures());
        }
    }, [tag]);





    const getCategories = () => {
        return categories.map((category, index) => {
            return (
                <p
                    key={index}
                    style={{ color: category.bgColor, whiteSpace: 'nowrap' }}
                    onClick={() => dispatch(getFeatureByTag(category.tag))}
                >
                    {category.categoryName}
                </p>
            );
        })
    }


    return (
        <div className="search_container">
            <div className='search_categories'>
                <button className="category_btn"
                    onClick={() => dispatch(getFeatures())}
                >All</button>
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