import React, {Suspense} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage";




function App(){
    return(
        <Router>
            <Suspense fallback ={<div>Loading...</div>}>
                <div></div>
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