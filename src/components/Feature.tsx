import { useEffect } from 'react';
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { categories, trimText } from "../dataContainer";
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import '../styles/Feature.css';
import { getRatedFeatures } from '../redux/reducers/features';


interface Category {
    tag: string;
    bgColor: string;
    categoryName: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const Feature = () => {
    const navigate = useNavigate();
    const { ratedFeatures } = useAppSelector(state => state.features);
    const dispatch = useAppDispatch();


    const getFeatureInfo = (tag: string): Category => {
        return categories.filter(category => category.tag === tag)[0];
    }


    useEffect(() => {
        dispatch(getRatedFeatures());
    }, []);

    return (
        <div className="feature_container">
            <h1>Feature</h1>
            <div className="features">
                {ratedFeatures.slice(0, 3).map((feature, index) => {
                    const category = getFeatureInfo(feature.tag);
                    return <div
                    onClick={() => navigate('/detail', { state: { feature }})}
                        style={{
                            backgroundImage: `url(${feature.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                        key={index}
                        className="feature">
                        <div className="title" >
                            <p>{trimText(feature.title)}</p>
                            <div className="tag" style={{ backgroundColor: category.bgColor }}>
                                <category.icon
                                    sx={{ color: "white", marginRight: '5px', fontSize: '12px' }} />
                                <span>
                                    {category.categoryName}
                                </span>

                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Feature;