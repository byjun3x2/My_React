import React from "react";

export default function MyButton({props}) {

    const [showText, setShowText] = React.useState('사진 보여주기');

    const handleClick = () => {

        setShowText(prev => (prev === "사진 보여주기" ? "사진 감추기" : "사진 보여주기"));

        if (props) props();
    };

    return (
        <>
             <button onClick={handleClick}>{showText}</button>
        </>
    );
}