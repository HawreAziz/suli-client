import "../styles/Card.css";
import { Feature } from '../data';
import { NavigateFunction } from 'react-router-dom'
import time from '../hooks/time';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { getCurrentWeekDay, trimText } from '../dataContainer';

interface CardProps {
    feature: Feature;
    navigate: NavigateFunction;
}

const Card: React.FunctionComponent<CardProps> = ({ feature, navigate }) => {

    return (
        <div
            className='card_container'
            onClick={() => navigate('/detail', { state: { feature } })}
        >
            <div style={{
                height: '50%',
                width: '100%'
            }}>
                <img
                    className='card_image'
                    src={feature.image}
                    alt={feature.tag} />
            </div>
            <div className="card_info_container">
                <div className='card_description'>
                    <p className="card_title">{feature.title}</p>
                    <p className="card_tag">{feature.tag}</p>
                    <p className="card_description_text">{trimText(feature.description, 120)}</p>
                </div>
                <div className="card_opening_hour">
                    <WatchLaterIcon style={{ fontSize: 30, marginRight: 5, color: 'rgb(141, 141, 163)' }} />
                    <p>{time(getCurrentWeekDay(feature))}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;