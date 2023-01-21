import React from "react";
import {Menu} from "antd";
import axios from "axios";
import {USER_SERVER} from "../../../Config";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function RightMenu(props){
    const user = useSelector((state)=>state.user);
    const navigate = useNavigate();

    const LogoutHandler =() => {
        axios.get(`${USER_SERVER}/logout`).then((response) => {
            if(response.status === 200)
            {
                navigate("/login");

            }else{
                alert("Log Out Failed");
            }
        });
    };

    if(user.userData && user.userData.isAuth)
    {
        return(
            <Menu mode={props.mode}>
                <Menu.Item key= "mypage">
                    마이페이지
                </Menu.Item>
                <Menu.Item key="logout">
                    <a onClick ={LogoutHandler}></a>
                </Menu.Item>
            </Menu>
        )
    }
    else{
        return(
            <Menu mode={props.mode}>
                <Menu.Item key="mail">
                    <a href="/login">로그인</a>
                </Menu.Item>
                <Menu.Item key="app">
                    <a href="/register">회원가입</a>
                </Menu.Item>
            </Menu>
        );
    }
}

export default RightMenu;