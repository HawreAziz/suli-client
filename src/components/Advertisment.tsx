import React from 'react';


const Advertisment: React.FunctionComponent = () => {
    return (
        <div
            onClick={() => console.log('go to addvertisment')}
            className="addvertisment"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/addvertisment.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        />
    );
}


export default Advertisment;