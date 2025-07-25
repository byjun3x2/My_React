import React from 'react';

export default function Increase(props) {


    return (
        <>

            <button onClick={() => props.onClick()}>증가 버튼</button>
        </>
    )
}