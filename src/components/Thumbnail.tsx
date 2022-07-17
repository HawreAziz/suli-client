import React from 'react'
import "../styles/Thumbnail.css";

interface Props {
    images: string[]
 }

const Thumbnail: React.FunctionComponent<Props> = ({images}) => {
    return (
        <div className="thumbnail_container">
            <p>Pictures</p>
            <div className="thumbnail">
                { images.map((image, index) => {
                    return <div key={index} className='thumbnail_image'>
                        <img src={image} alt="image" />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Thumbnail;