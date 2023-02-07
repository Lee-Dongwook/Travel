import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Auth from "../hoc/auth";
import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from"./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NewPassword from "./views/NewPassword/NewPassword";


function App(){
    return(
        <Router>
            <Suspense fallback ={<div>Loading...</div>}>
                <NavBar />
                <div style={{paddingTop: "150px"}}></div>
                <div>
                    <Routes>
                        <Route path ="/" element={Auth(LandingPage, null)}/>
                        <Route path = "/register" element = {Auth(RegisterPage, null)} />
                        <Route path = "/login" element = {Auth(LoginPage, null)} />
                        <Route path = "/Newpassword" element = {Auth(NewPassword, null)} />
                    </Routes>
                </div>
            </Suspense>
        </Router>
    )
}

export default App;