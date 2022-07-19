import "../styles/Category.css";
import { categories } from '../dataContainer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hooks';
import { getFeatureByTag } from "../redux/reducers/features";


function Category() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <div className="category_container" >
            <h1>Categories</h1>
            <div className="categories" >
                {
                    categories.map((category, index) => {
                        return (
                            <div
                                key={index}
                                onClick={() => {
                                    dispatch(getFeatureByTag(category.tag));
                                    navigate("/search");
                                }}
                                style={{ background: category.bgColor }}
                                className='shop_container'>
                                <category.icon sx={{ fontSize: '40px' }} />
                                <h1>{category.categoryName}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Category;