import "../styles/Category.css";
import { categories } from '../dataContainer';


function Category() {
    return (
        <div className="category_container" >
            <h1>Categories</h1>
            <div className="categories" >
                {
                    categories.map((category, index) => {
                        return <div key={index}
                            style={{ background: category.bgColor }}
                            className='shop_container'>
                            <category.icon sx={{ fontSize: '60px' }} />
                            <h1>{category.categoryName}</h1>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Category;