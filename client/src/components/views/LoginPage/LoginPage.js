import React from 'react';

function LoginPage(){
    return(
        <div>
            <div className="Id">
                <form input="email">아이디</form>
            </div>
            <div className="Password">
                <form input="password">비밀번호</form>
            </div>
            <div className="Submit">
                <button>로그인</button>
            </div>
        </div>
    )
}

export default LoginPage;