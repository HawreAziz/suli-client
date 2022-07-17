import React from 'react'
import "../styles/InfoData.css";

interface Props {
    location: {
        lat: number;
        long: number;
    }
}

const InfoData: React.FunctionComponent<Props> = ({ location }) => {
    return (
        <div className='infodata_container'>
            <p>Location & Hours</p>
            <div className="open_addr_container">
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
                <div className="opening_hours_container">
                    {
                        ['Sat', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun'].map((day, index) => {
                            return (
                                <div key={index} className="opening_box">
                                    <p style={{ fontSize: 20 }}>{day}</p>
                                    <p style={{ fontSize: 20}}>
                                        <span style={{ color: 'green' }}>
                                            &emsp;&emsp;8:00 AM&nbsp;</span>
                                        - 11:00 PM
                                    </p>
                                </div>
                            );

                        })
                    }
                </div>
            </div>
        </div>
    );
}


export default InfoData;