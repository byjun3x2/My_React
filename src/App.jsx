import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MyButton from "./MyButton";
import AboutPage from "./AboutPage";
import Profile from "./Profile";
import Home from "../pages/Home";
import Greeting from "../pages/Greeting";
import CounterButton from "./CounterButton";
import Increase from "./Increase";
import WrongCounter from "./WrongCounter";

export default function App() {
    const [show, setShow] = React.useState(false);
    const [count, setCount] = React.useState(0);

    function showImg() {
        console.log("showImg");

        if (show) {
            console.log(show);
             setShow(false);

        } else {
            setShow(true);
        }
    }

    function handleClick() {
        console.log('눌렸다는 증거')
    }

    function handleCount() {

        console.log(`${count+1}번 눌렸다고`)
        setCount(count + 1)
    }


    return (
        <>

            <div>
                <WrongCounter/>
                <Increase onClick={handleCount} />
                {count}
                <CounterButton onClick={handleClick}/>
                <Greeting name="jiwon" age='27' say="안녕"/>
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