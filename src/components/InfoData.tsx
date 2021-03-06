import { features } from 'process';
import React from 'react'
import { OpeningHours } from '../data';
import "../styles/InfoData.css";

interface Props {
    location: {
        lat: number;
        long: number;
    }
    opening: OpeningHours;
    addr: string;
}

const InfoData: React.FunctionComponent<Props> = ({ location, opening, addr }) => {
    return (
        <div className='infodata_container'>
            <p >Location & Hours</p>
            <div className="open_addr_container">
                <div className="opening_hours_container">
                    {

                        Object.keys(opening).map((day, index) => {
                            const work_time = opening[day as keyof OpeningHours];
                            return (
                                <div key={index} className="opening_box">
                                    <p style={{ fontSize: 20, fontWeight: 'bold', marginRight: '20px' }}>{day}</p>
                                    <p style={{ fontSize: 20, textAlign: 'right', }}>
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
                    <div className="image_opacity" >
                        <p>{addr}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default InfoData;