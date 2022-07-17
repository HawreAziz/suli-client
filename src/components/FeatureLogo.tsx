import React from 'react'
import "../styles/FeatureLogo.css";

interface Props {
    logoDetail: {
        icon: string;
        title: string
    }
}

const FeatureLogo: React.FunctionComponent<Props> = ({ logoDetail }) => {
    return (
        <div className='logo_container' >
            <p>{logoDetail.title}</p>
            <div className="feature_logo">
                <img src={logoDetail.icon} alt='icon' />
            </div>
        </div>
    );
}

export default FeatureLogo;