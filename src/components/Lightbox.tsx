import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Props {
    lightboxImage: string | null;
    setLightboxImage: (image: string) => void;
    rightLightBox: () => void;
    leftLightBox: () => void;
}

const Lightbox: React.FunctionComponent<Props> = ({ lightboxImage, setLightboxImage, rightLightBox, leftLightBox }) => {
    return (lightboxImage
        ? <div className="lightbox" >
            <div style={{
                backgroundImage: `url(${lightboxImage})`
            }} className="lightbox_image">
                <div
                    onClick={leftLightBox}
                    className="left_lightbox"
                    style={{
                        display: 'flex',
                        flex: '5%',
                        height: '100%',
                        backgroundColor: 'transparent'
                    }}>
                    <ChevronLeftIcon style={{ fontSize: 60, color: 'white', alignSelf: 'center' }} />
                </div>
                <div onClick={() => setLightboxImage("")} className="middle_lightbox" style={{
                    flex: '90%',
                    height: '100%'
                }}></div>
                <div
                    onClick={rightLightBox}
                    className="right_lightbox"
                    style={{
                        display: 'flex',
                        flex: '5%',
                        height: '100%',
                        backgroundColor: 'transparent',
                    }} >
                    <ChevronRightIcon style={{ fontSize: 60, color: 'white', alignSelf: 'center' }} />
                </div>
            </div>
        </div>
        : null);
}

export default Lightbox;