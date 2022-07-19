import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { getAdvertisment } from '../redux/reducers/features';


const Advertisment: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { addvertisedImage } = useAppSelector(state => state.features);

    useEffect(() => {
        dispatch(getAdvertisment())
    }, [])

    return (
        <div
            onClick={() => console.log('go to addvertisment')}
            className="addvertisment"
            style={{
                backgroundImage: `url(${addvertisedImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        />
    );
}


export default Advertisment;