import React from 'react'
import "../styles/Thumbnail.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


interface Props {
    images: string[];
    setLightBoxImage: (image: string) => void;
}

const Thumbnail: React.FunctionComponent<Props> = ({ images, setLightBoxImage }) => {

    const slideLeft = () => {
        const slider = document.getElementById('slider');
        if (!slider) return;
        slider.scrollLeft -= 250;
    }

    const slideRight = () => {
        const slider = document.getElementById('slider');
        if (!slider) return;
        slider.scrollLeft += 250;
    }

    return (
        <div className="thumbnail_container">
            <p>Pictures</p>
            <div className="thumbnail" >
                <ChevronLeftIcon
                    onClick={slideLeft}
                    style={{
                        fontSize: '70px',
                        color: 'white',
                        borderRadius: '50px',
                    }}
                />
                <div id="slider" className="image_slider">
                    {images.map((image, index) => {
                        return <img
                            onClick={() => {
                                setLightBoxImage(image);
                            }}
                            key={index}
                            className="thumbnail_image"
                            src={image}
                            alt="image" />
                    })}
                </div>
                <ChevronRightIcon
                    onClick={slideRight}
                    style={{
                        fontSize: '70px',
                        color: 'white',
                        borderRadius: '50px',
                    }}
                />
            </div>
        </div>
    )
}

export default Thumbnail;