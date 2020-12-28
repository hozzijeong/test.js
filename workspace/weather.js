/*
  1. 위치정보 제공하는 함수 구현하기. 
  2. 해당 함수를 통해 위도 경도 데이터 저장 하고, 해당 데이터들을 Storage에 저장함.
  3. 날씨 정보 API 활용해서 위도, 경도, APIKEY 입력하고, 정보를 받아옴.
  4. html 자체에 날씨 정보를 넣는 텍스트를 만들어서 본인이 원하는 정보를 가공해서 넣어 주면 됨. 
 */

const COORDS = "coords";

function handleGeoSuccess(position){

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const geoObj = {
        latitude,
        longitude
    };
    saveLoc(geoObj);
}

function handleGeoFail(){
    alert("위치정보를 불러 올 수 없습니다.");
}

function saveLoc(geoObj){
    localStorage.setItem(COORDS,JSON.stringify(geoObj));
}


function askForLocation(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoFail); //함수 파라미터 2개를 받는 위치 함수 구현. 한 개는 성공, 한 개는 실패했을 경우 실행하는 함수 넣어주면 됨.
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForLocation();
    }else{

    }

    console.log("hello");

}

function init(){
    askForLocation();
}

init();