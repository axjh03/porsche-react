import React from 'react';
import Card from './Card';
import {CAR_CARD} from './data'; // Adjust the path to the data file if necessary

export default function CarCard() {
    const containerStyles = {
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
    };

    return (
        <div style={containerStyles}>
            {CAR_CARD.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </div>
    );
}
