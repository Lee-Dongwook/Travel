import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {loginUser} from "../../../_actions/user_action";
import {useNavigate} from "react-router-dom";

import {Formik} from "formik";
import * as Yup from "yup";
import {Form, Input, Button, Checkbox, Typography} from "antd";
import Icon from "@ant-design/icons";

const {Title} = Typography;
function Password(){
    window.location.href="../NewPassword";
}

function LoginPage(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const rememberMeChecked = localStorage.getItem("rememberMe") ? true : false;
    const [formErrorMessage, setFormErrorMessage] = useState("");
    const [rememberMe, setRememberMe] = useState(rememberMeChecked);

    const handleRememberMe = () => {
        setRememberMe(!rememberMe);
    }

    const initialEmail = localStorage.getItem("rememberMe")
    ? localStorage.getItem("rememberMe") : "";


    return(
        <Formik
        initialValues={{
            email: initialEmail,
            password: "",
        }}
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email("Email is invalid")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters")
                .required("Password is required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                let dataToSubmit = {
                    email: values.email,
                    password: values.password,
                };

                dispatch(loginUser(dataToSubmit))
                    .then((response) => {
                        if (response.payload.loginSuccess) {
                            // Favorite.js에서 localStorage가 사용됨. 임의로 localSorage에 userId를 넣어놓도록 설정한 코드
                            window.localStorage.setItem(
                                "userId",
                                response.payload.userId
                            );
                            if (rememberMe === true) {
                                //window.localStorage.setItem('rememberMe', values.id);
                                //!!!!values.id이 아니라 values.email로 바꿔줘야 제대로 remember me 동작!!!!
                                window.localStorage.setItem(
                                    "rememberMe",
                                    values.email
                                );
                            } else {
                                localStorage.removeItem("rememberMe");
                            }
                            navigate("/");
                        } else {
                            setFormErrorMessage(
                                "Check out your Account or Password again"
                            );
                        }
                    })
                    .catch((err) => {
                        setFormErrorMessage(
                            "Check out your Account or Password again"
                        );
                        setTimeout(() => {
                            setFormErrorMessage("");
                        }, 3000);
                    });
                setSubmitting(false);
            }, 500);
        }}
    >
        {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    //dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    //handleReset,
                } = props;

                return (
                    <div className="app">
                        <Title level={2}>Log In</Title>
                        <form
                            onSubmit={handleSubmit}
                            style={{ width: "350px" }}
                        >
                            <Form.Item required>
                                <Input
                                    id="email"
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Enter your email"
                                    type="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.email && touched.email
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.email && touched.email && (
                                    <div
                                        className="input-feedback"
                                        style={{ paddingTop: "8px" }}
                                    >
                                        {errors.email}
                                    </div>
                                )}
                            </Form.Item>

                            <Form.Item required>
                                <Input
                                    id="password"
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Enter your password"
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.password && touched.password
                                            ? "text-input error"
                                            : "text-input"
                                    }
                                />
                                {errors.password && touched.password && (
                                    <div
                                        className="input-feedback"
                                        style={{ paddingTop: "8px" }}
                                    >
                                        {errors.password}
                                    </div>
                                )}
                            </Form.Item>

                            {formErrorMessage && (
                                <label>
                                    <p
                                        style={{
                                            color: "#ff0000bf",
                                            fontSize: "0.7rem",
                                            border: "1px solid",
                                            padding: "1rem",
                                            borderRadius: "10px",
                                        }}
                                    >
                                        {formErrorMessage}
                                    </p>
                                </label>
                            )}

                            <Form.Item>
                                {/* handleRememberMe는 체크박스 토글 역할, 체크박스가 체크되어있으면 rememberMe 실행 */}
                                <Checkbox
                                    id="rememberMe"
                                    onChange={handleRememberMe}
                                    checked={rememberMe}
                                >
                                    Remember me
                                </Checkbox>
                                <a
                                    className="login-form-forgot"
                                    href="/Newpassword"
                                    style={{ float: "right" }}
                                    onClick={Password}
                                >
                                    forgot password
                                </a>
                                <div>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        style={{ minWidth: "100%" }}
                                        disabled={isSubmitting}
                                        onSubmit={handleSubmit}
                                    >
                                        Log in
                                    </Button>
                                </div>
                                Or <a href="/register">register now!</a>
                            </Form.Item>
                        </form>
                    </div>
                );
            }}
        </Formik>
    )
}

export default LoginPage;