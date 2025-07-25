import React from 'react';

export default function CounterButton(props) {
    return(
        <>
            <button onClick={props.onClick}>
                눌러봐

            </button>
        </>
    )
}