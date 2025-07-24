import React from 'react';

const user = {
    name: "이름 모를 여자",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

export default function Profile() {
    return(
        <>
            <h1>{user.name}</h1>
            <img className="ProfileImage"
                 src={user.imageUrl}
                 alt="ProfileImage"
                 style={{
                     width: user.imageSize,
                     height: user.imageSize
                 }}
            />
        </>
    );
}