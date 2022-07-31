import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { getAdvertisment } from '../redux/reducers/features';
import { useAnalyticsEventTracker } from '../hooks/useEventTracker';


const Advertisment: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const [index, setIndex] = useState(1);
    const { addvertisedImages } = useAppSelector(state => state.features);
    const eventTracker = useAnalyticsEventTracker('Addvertisements');

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

    const { url, link, name } = addvertisedImages[index];
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            margin: '50px 0'
        }}>
            <div
                onClick={() => {
                    eventTracker(name);
                    window.open(link);
                }}
                className='addvertisment'
                style={{
                    backgroundImage: `url(${url})`,
                }}
            >
            </div>
        </div>
    );
}


export default Advertisment;