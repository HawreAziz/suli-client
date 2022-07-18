import { categories } from "../dataContainer";
import '../styles/Search.css';
import { Feature, restaurants } from '../data';
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


    return (
        <div className="search_container">
            <div className='search_categories'>
                <button className="category_btn">All</button>
                {getCategories()}
            </div>
            <div className='search_card_container'>
                {restaurants.map((restaurant: Feature, index) => {
                    return <Card key={index} feature={restaurant} navigate={navigate} />;

                })}
            </div>
            {/* create pagination */}
        </div >
    )
}

export default Search;