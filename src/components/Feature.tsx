import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { categories, features, trimText } from "../dataContainer";
import '../styles/Feature.css';


interface Category {
    tag: string;
    bgColor: string;
    categoryName: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const Feature = () => {


    const getFeatureInfo = (tag: string): Category => {
        return categories.filter(category => category.tag === tag)[0];
    }

    return (
        <div className="feature_container">
            <h1>Feature</h1>
            <div className="features">
                {features.map((feature, index) => {
                    const category = getFeatureInfo(feature.tag);
                    return <div
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