document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    navigator.geolocation.getCurrentPosition(
        sucessoNageolocation,
        erroNaGeolocation,
        {timeout:120000}
    );
}

function sucessoNageolocation(positon){
    let inputlat = document.getElementById("lat");
    let inputlgn = document.getElementById("lgn");

    inputlat.value = position.coords.latitude; 
    inputlgn.value = position.coords.latitude;

console.log(positon);
}

function erroNaGeolocation(err){

console.log(err);

}