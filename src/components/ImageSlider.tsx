import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
    image: string;
    prevImage: () => void;
    nextImage: () => void;
}

const ImageSlider: React.FunctionComponent<Props> = ({ image, prevImage, nextImage }) => {
    
    return (
        <div
            style={{
                backgroundImage: `url(${image})`,
            }}
            className="background_image">
            <ChevronLeftIcon
                onClick={prevImage}
                style={
                    {
                        opacity: .8,
                        fontSize: 90,
                        color: 'white',

                    }} />
            <ChevronRightIcon
                onClick={nextImage}
                style={{
                    opacity: .8,
                    fontSize: 90,
                    color: 'white',
                }} />
        </div>
    );
}

export default ImageSlider