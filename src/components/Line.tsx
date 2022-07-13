import React from 'react'

interface Props {
    lineStyle: React.CSSProperties;
}

const Line: React.FunctionComponent<Props> = ({ lineStyle }) => {
    return (
        <div
            className='line'
            style={{
                ...lineStyle,
                height: '3px',
                borderStyle: 'outset',
                borderWidth: '1px',
                marginLeft: '10px',
                // marginTop: '-15px',
                backgroundColor: 'rgb(151, 188, 178)'
            }}
        />
    );
}

export default Line;