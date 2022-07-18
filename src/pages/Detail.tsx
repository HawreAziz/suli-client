import { useState } from "react";
import { restaurants } from '../data';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../styles/Detail.css';
import FeatureLogo from "../components/FeatureLogo";
import Thumbnail from "../components/Thumbnail";
import { useEffect } from 'react';
import Line from "../components/Line";
import InfoData from '../components/InfoData';
import { useLocation } from "react-router-dom";
import { Feature } from "../data";

interface FeatureProps {
    feature: Feature;
}

const Detail = () => {
    const [imageIndex, setImageIndex] = useState(0)
    const { state } = useLocation() as { state: FeatureProps };
    const { feature } = state;
    let images = feature.images;
    if (images.length === 0) {
        images = restaurants.map((res) => res.image);
    }

    console.log(images);
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

    return (
        <div className="detail_container">
            <div className="image_container">
                <div
                    style={{
                        backgroundImage: `url(${images[imageIndex]})`,
                    }}
                    className="image_slider">
                    <ChevronLeftIcon
                        onClick={prevImage}
                        style={
                            {
                                backgroundColor: 'white',
                                opacity: .6,
                                fontSize: 60,
                                color: 'red',
                                borderRadius: 40

                            }} />
                    <ChevronRightIcon
                        onClick={nextImage}
                        style={{
                            backgroundColor: 'white',
                            opacity: .6,
                            fontSize: 60,
                            color: 'red',
                            borderRadius: 40
                        }} />
                </div>
            </div>
            {/* create icon and title */}
            <FeatureLogo logoDetail={{ icon: feature.icon, title: feature.title }} />
            {/* create pictures section */}
            <Thumbnail images={images} />
            {/* create line */}
            <Line lineStyle={
                {
                    width: '90%',
                    margin: '10px'
                }} />
            {/* create map image and opening hours  */}
            <InfoData location={feature.location} />
            {/* create amenities */}
            {/*  TODO what about advertisments */}
        </div >
    )
}

export default Detail;