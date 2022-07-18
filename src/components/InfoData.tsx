import React from 'react'
import { OpeningHours } from '../data';
import "../styles/InfoData.css";

interface Props {
    location: {
        lat: number;
        long: number;
    }
    opening: OpeningHours;
}

const InfoData: React.FunctionComponent<Props> = ({ location, opening }) => {
    return (
        <div className='infodata_container'>
            <p style={{ whiteSpace: 'nowrap'}}>Location & Hours</p>
            <div className="open_addr_container">
                <div className="opening_hours_container">
                    {

                        Object.keys(opening).map((day, index) => {
                            const work_time = opening[day];
                            return (
                                <div key={index} className="opening_box">
                                    <p style={{ fontSize: 20, fontWeight: 'bold' }}>{day}</p>
                                    <p style={{ fontSize: 20, textAlign: 'left' }}>
                                        <span style={{ color: 'green' }}>
                                            {work_time.start}&nbsp;</span>
                                        - {work_time.end}
                                    </p>
                                </div>
                            );

                        })
                    }
                </div>
                <div
                    className='map_image'
                    onClick={() => {
                        window.open(`https://www.google.com/maps/@${location.lat},${location.long},${15}z
                        `)
                    }}
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/map.png)`
                    }}
                >
                    <div className="image_opacity" />
                </div>
            </div>
        </div>
    );
}


export default InfoData;