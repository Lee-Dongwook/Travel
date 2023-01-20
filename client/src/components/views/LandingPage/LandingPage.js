import React from 'react';

function LandingPage(){
    return(
        <div>
        <div className="Title">
           <h1>Travel Spot</h1> 
        </div>
        <div className="Seoul">
            <button>서울</button>
            <br />
        </div>
        <div className="Gyeonggi">
            <button>경기</button>
            <br />
        </div>
        <div className ="GangWon">
            <button>강원</button>
            <br />
        </div>
        <div className="ChoongChung">
            <button>충청</button>
            <br />
        </div>
        <div className="JeonRa">
            <button>전라</button>
        </div>
        <div className="GyeongSang">
            <button>경상</button>
        </div>
        </div>
    )
}

export default LandingPage