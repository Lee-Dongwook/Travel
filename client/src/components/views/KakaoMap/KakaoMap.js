import React, {useEffect} from "react";

const {kakao} = window;


function KakaoMap(props)
{  
    useEffect(() => { 
    const container = document.getElementById('map');
    const options={
        center: new kakao.maps.LatLng(37.55146554234294, 126.92500174740653),
        level: 3
    };

    const map = new kakao.maps.Map(container,options);
}, [])
    return (<div id="map" style={{width: "500%", height: "400px", color: "#000", fontWeight: "bold", textAlign:"center"}}>

    </div>
    );
}

export default KakaoMap;