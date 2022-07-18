import { useState } from "react";
import { restaurants } from '../data';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FeatureLogo from "../components/FeatureLogo";
import Line from "../components/Line";
import InfoData from '../components/InfoData';
import { useLocation } from "react-router-dom";
import { Feature } from "../data";
import "../styles/Thumbnail.css";
import '../styles/Detail.css';
import Lightbox from '../components/Lightbox';
import ImageSlider from '../components/ImageSlider';

interface FeatureProps {
    feature: Feature;
}

const Detail = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const { state } = useLocation() as { state: FeatureProps };
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const { feature } = state;
    let images = feature.images;
    if (images.length === 0) {
        images = restaurants.map((res) => res.image);
    }

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


    const nextImage = () => {
        if (imageIndex < images.length - 1) {
            setImageIndex(imageIndex + 1);
        } else {
            setImageIndex(0);
        }
    }


    const prevImage = () => {
        if (imageIndex === 0) {
            setImageIndex(images.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    }

    const rightLigthBox = () => {
        if (!lightboxImage) {
            return;
        }
        const lightboxIndex = images.findIndex(image => image == lightboxImage);

        if (lightboxIndex < images.length - 1) {
            setLightboxImage(images[lightboxIndex + 1]);
        } else {
            setLightboxImage(images[0]);
        }
    }

    const leftLightBox = () => {
        if (!lightboxImage) {
            return;
        }
        const lightboxIndex = images.findIndex(image => image == lightboxImage);

        if (lightboxIndex === 0) {
            setLightboxImage(images[images.length - 1]);
        } else {
            setLightboxImage(images[lightboxIndex - 1]);
        }
    }

    console.log(state)

    return (
        <div className="detail_container">
            <ImageSlider image={images[imageIndex]} prevImage={prevImage} nextImage={nextImage} />
            <FeatureLogo logoDetail={{ icon: feature.icon, title: feature.title }} />
            <Lightbox
                lightboxImage={lightboxImage}
                setLightboxImage={setLightboxImage}
                rightLightBox={rightLigthBox}
                leftLightBox={leftLightBox}
            />
            <div className="detail_body_container">

                <div className="detail_description">
                    <p>{feature.description}</p>
                </div>
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
                                        setLightboxImage(image);
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

                <Line lineStyle={
                    {
                        width: '90%',
                        margin: '10px'
                    }} />
                <InfoData location={feature.location} opening={feature.opening_hours} />
                {/* create amenities */}
                {/*  TODO what about advertisments */}
            </div>
        </div >
    )
}

export default Detail;