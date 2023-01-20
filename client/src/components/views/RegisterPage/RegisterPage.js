import React from 'react';

function RegisterPage(){
    return(
        <div>
            <div className="Name">
                <form input="name">이름</form>
            </div>
            <div className="Id">
                <form input="email">아이디(이메일형식)</form>
            </div>
            <div className="Password">
                <form input="password">비밀번호</form>
            </div>
            <div className="Confirmpassword">
                <form input="password">비밀번호 확인</form>
            </div>
            <div className="Submit">
                <button>등록</button>
            </div>
        </div>
    )
}
export default RegisterPage