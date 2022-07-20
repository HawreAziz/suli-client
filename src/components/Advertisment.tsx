import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { getAdvertisment } from '../redux/reducers/features';


const Advertisment: React.FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { addvertisedImage } = useAppSelector(state => state.features);

    useEffect(() => {
        dispatch(getAdvertisment())
    }, [])

    console.log(addvertisedImage.link)
    return (
        <div
            className="addvertisment"
            onClick={() => {
                if (addvertisedImage.link) {
                    window.open(addvertisedImage.link);
                }
            }}
            style={{
                backgroundImage: `url(${addvertisedImage.image})`,
            }}
        />
    );
}


export default Advertisment;