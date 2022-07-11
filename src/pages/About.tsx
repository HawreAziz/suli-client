import { autocompleteClasses } from '@mui/material';
import { useState, useEffect } from 'react';
import "../styles/About.css";

const About = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        });
        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            });
        }
    }, [width, height]);

    console.log(height);
    return (
        <div>
            <div className="about_box_1">
                <img
                    src={`${process.env.PUBLIC_URL}/suli-logo.png`}
                    style={{
                        minWidth: 400,
                        minHeight: 300,
                        width: width * .45,
                        height: height * .35,
                    }}
                />
            </div>
            <div className="about_box_2">
                <h1>What is</h1>
                <img src={`${process.env.PUBLIC_URL}/suli-logo.png`}
                    style={{
                        width: width * .30,
                    }}
                />
            </div >
            <div className="about_box_3">
                <h1 style={{
                    width: width * .30,
                    minWidth: 200,
                }}>Are you bored at home and<br />Don't know where to go?</h1>
                <img src={`${process.env.PUBLIC_URL}/bored.svg`}
                    style={{
                        width: width * .10,
                        minWidth: 100,
                    }}
                />
            </div>
            <div className="about_box_4">
                <img src={`${process.env.PUBLIC_URL}/checkout.svg`}
                    style={{
                        width: width * .12,
                        minWidth: 120,
                    }}
                />
                <h1
                    style={{
                        width: width * .30,
                        minWidth: 100
                    }}
                >Check out Suli.Today to find<br />the best places in Slemani</h1>
            </div>
            <div className="about_box_5">
                <img src={`${process.env.PUBLIC_URL}/find.svg`}
                    style={{
                        width: width * .12,
                        minWidth: 120,
                    }}
                />
                <h1
                    style={{
                        width: width * .45,
                        minWidth: 100,
                        textAlign: 'center',
                    }}
                >Find all information you need<br />such as Location, hours and amenities</h1>
            </div>

        </div>
    );
}

export default About;