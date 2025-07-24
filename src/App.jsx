import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MyButton from "./MyButton";
import AboutPage from "./AboutPage";
import Profile from "./Profile";
import Home from "../pages/Home";

export default function App() {
    const [show, setShow] = React.useState(false);

    function showImg() {
        console.log("showImg");

        if (show) {
            console.log(show);
             setShow(false);

        } else {
            setShow(true);
        }
    }


    return (
        <>

            <div>
                <h1>Welcome to my app</h1>
                <MyButton props={showImg}/>
                {show ? <Profile/> : ""}
                <AboutPage/>
                =============================================
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}