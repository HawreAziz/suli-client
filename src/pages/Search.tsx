import { categories } from "../dataContainer";
import '../styles/Search.css';
import { restaurants } from '../data';
import Card from '../components/Card';
import { useNavigate } from "react-router-dom";


const Search = () => {
    const navigate = useNavigate();

    const getCategories = () => {
        return categories.map((category, index) => {
            return (
                <p
                    key={index}
                    style={{ color: category.bgColor, whiteSpace: 'nowrap' }}
                >
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
                    return  <Card key={index} feature={restaurant} navigate={navigate} />;

                })}
            </div>
            {/* create pagination */}
        </div >
    )
}

export default Search;