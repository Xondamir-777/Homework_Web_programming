import React, { useState, useEffect } from 'react';

export default function Lab4() {
    const [text, setText] = useState("Mouse over here");
    const [colorIndex, setColorIndex] = useState(0);
    const [textStyle, setTextStyle] = useState({ color: "black", fontSize: "10px" });
    const [inputValue, setInputValue] = useState("");
    const [inputStyle, setInputStyle] = useState({ backgroundColor: "white", borderColor: "black" });
    const [displayText, setDisplayText] = useState("");

    const colors = ["green", "blue", "yellow"];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex(prevIndex => (prevIndex + 1) % colors.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function toggleHeading() {
        setText(prevText => prevText === "Lab4" ? "Hello World" : "Lab4");
        setTextStyle(prevStyle => ({ ...prevStyle, color: "black" }));
    }

    function mouseOver() {
        setText("Good Job");
        setTextStyle(prevStyle => ({ ...prevStyle, color: "blue" }));
    }

    function mouseOut() {
        setText("Lab4");
        setTextStyle(prevStyle => ({ ...prevStyle, color: "black" }));
    }

    function toggleText() {
        setTextStyle(prevStyle => ({
            ...prevStyle,
            color: prevStyle.color === "red" ? "black" : "red",
            fontSize: prevStyle.fontSize === "1vw" ? "2vw" : "1vw"
        }));
    }

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleInputFocus() {
        setInputStyle({ backgroundColor: "green", borderColor: "blue" });
    }

    function handleInputBlur() {
        setInputStyle({ backgroundColor: "white", borderColor: "black" });
        setDisplayText(inputValue);
    }

    function handleClick() {
        if (!displayText && inputValue) {
            setDisplayText(inputValue);
        } else {
            setDisplayText("");
        }
    }

    return (
        <>
            <div className='Lab4'>
                <h1
                    onClick={toggleHeading}
                    onMouseOver={mouseOver}
                    onMouseOut={mouseOut}
                    style={{
                        color: textStyle.color,
                        fontSize: textStyle.fontSize,
                        textAlign: "center"
                    }}>
                    {text}
                </h1>
                <p onClick={toggleText}
                    style={{
                        color: textStyle.color,
                        fontSize: textStyle.fontSize
                    }}>
                    CLICK HERE TO CHANGE FONT SIZE. Contrary to popular belief, Lorem Ipsum is not simply random text...
                </p>
                <input
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={handleInputChange}
                    value={inputValue}
                    style={{
                        backgroundColor: inputStyle.backgroundColor,
                        borderColor: inputStyle.borderColor
                    }}
                />
                <input type="button" onClick={handleClick} value="Change"/>
                <h1>{displayText}</h1>
            </div>
        </>
    );
};
