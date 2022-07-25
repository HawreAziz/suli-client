import React, { useEffect, useState, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { getAdvertisment } from '../redux/reducers/features';
import SimpleImageSlider from 'react-simple-image-slider';


const Advertisment: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const [index, setIndex] = useState(1);
    const timeoutRef = useRef(null);
    const { addvertisedImages } = useAppSelector(state => state.features);

    useEffect(() => {
        dispatch(getAdvertisment());
    }, [dispatch]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex(index < addvertisedImages.length - 1 ? index + 1 : 0);
        }, 5000);
        return () => {
            clearTimeout(timer);
        }
    }, [index]);


    if (addvertisedImages.length == 0) {
        return null;
    }

    console.log(addvertisedImages);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            margin: '50px 0'
        }}>
            <div
                onClick={() => window.open(addvertisedImages[index].link)}
                className='addvertisment'
                style={{
                    backgroundImage: `url(${addvertisedImages[index].url})`,
                }}
            >
            </div>
        </div>
    );
}


export default Advertisment;