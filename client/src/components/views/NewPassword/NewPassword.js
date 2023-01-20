import React from 'react';

function NewPassword(){
    return(
        <div>
            <div className="Id">
                <form input ="email">아이디</form>
            </div>
            <div className="Password">
                <form input="password">새 비밀번호</form>
            </div>
            <div className="Confirmpassword">
                <form input="password">비밀번호 확인</form>
            </div>
            <div className="Submit">
                <button>완료</button>
            </div>
        </div>
    )
}

export default NewPassword