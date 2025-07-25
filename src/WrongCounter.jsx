import React, { useState } from "react";

export default function WrongCounter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);

        console.log("버튼 클릭 직후 count 값:", count);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase 3번 호출</button>
        </div>
    );
}