import "../styles/Card.css";
import { Feature } from '../data';
import { NavigateFunction } from 'react-router-dom'

interface CardProps {
    feature: Feature;
    navigate: NavigateFunction;
}

const Card: React.FunctionComponent<CardProps> = ({ feature, navigate }) => {
    const excerp = (text: string, nrOfChars: number): string => {
        return text.length > nrOfChars
            ? text.substring(0, nrOfChars) + "..."
            : text;
    }
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
                    <p className="card_description_text">{excerp(feature.description, 120)}</p>
                </div>
                <div className="card_opening_hour">
                    <p style={{ color: 'green' }}>Open:</p>
                    <p>TODO</p>
                </div>
            </div>
        </div>
    );
}

export default Card;