import "../styles/Category.css";
import { categories } from '../dataContainer';
import { Link } from 'react-router-dom';


function Category() {
    return (
        <div className="category_container" >
            <h1>Categories</h1>
            <div className="categories" >
                {
                    categories.map((category, index) => {
                        return (
                            <Link key={index} to={`/search/${category.tag}`} style={{ textDecoration: 'none'}} >
                                <div
                                    style={{ background: category.bgColor }}
                                    className='shop_container'>
                                    <category.icon sx={{ fontSize: '60px' }} />
                                    <h1>{category.categoryName}</h1>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category;