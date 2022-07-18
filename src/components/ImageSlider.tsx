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
    );
}

export default ImageSlider