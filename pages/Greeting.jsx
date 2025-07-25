import React from 'react';

export default function Greeting(props) {
    return (
        <>
            <div>
                {props.name} {props.age} {props.say}
            </div>
        </>
    )
}