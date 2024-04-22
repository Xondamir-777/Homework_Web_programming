import './btn.css';
import React, { useState, useEffect } from 'react';

export default function Lab5() {
    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["green", "blue", "yellow"];

    useEffect(() => {
        const i = setInterval(() => {
            setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 1000);

        return () => clearInterval(i);
    }, []);
    

    return (
        <>
            <div className='Lab5'>
                <h1 style={{ color: colors[colorIndex],
                backgroundColor: "white"
                }}>Rainbow Text {colors[colorIndex]}</h1>
                <p>
                    asdfghjklertyuio8sdrftgyytfjychxgbkxbdcksgbdfkcjvkjhbdfhv ndfg wer erb gfjhrherkj hrwkg wrhg erkh gilw
                </p>
            </div>
        </>
    );
};
