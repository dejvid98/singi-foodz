import React from 'react';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            marginTop:'-2.5rem',
            marginBottom:'2rem',
            width:'24rem',
            marginLeft:'-1.5rem',

        }}
    />
);

export default ColoredLine;