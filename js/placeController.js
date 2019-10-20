'use-strict'

function onInitMap() {
    window.location = "./map.html";
}

function onMapClick(latLng) {
    var elLatLng = JSON.stringify(latLng);
    var latIndex = elLatLng.indexOf(":");
    var longIndex = elLatLng.indexOf(":", latIndex + 1);
    var lat = elLatLng.substring(latIndex + 1, latIndex + 9);
    var long = elLatLng.substring(longIndex + 1, longIndex + 9);
    var locationName = createUserLocationName();
    onAddUserLocation(lat, long, locationName);
    renderLocationDiv(lat, long, locationName);
}

function onAddUserLocation(lat, long, locationName) {
    addUserLocation(lat, long, locationName);
    renderUserList();
}

function renderUserList() {
    var userLocations = getLocations();
    var strHTMLs = userLocations.map(function (location) {
        return `
        <option value="${location.locationName} ${location.lat} ${location.long}" label="${location.locationName}"
                      oncontextmenu="onRemoveUserLocation()"/>
     `
    })
    document.getElementById('locations-list').innerHTML = strHTMLs.join('');
}

function onRemoveUserLocation(el) {
    console.log(el)
    var isSure = confirm('Are you sure?')
    if (!isSure) return;
    removeUserLocation(el);
    renderUserList();
}

function renderLocationDiv(lat, long, locationName) {
    document.querySelector(".latLng").innerHTML = `The coordinates of ${locationName} are: lat is ${lat}, long is ${long}`;
    renderDivColors();
}

function renderDivColors() {
    var userData = getUserData();
    let divContent = document.querySelector(".footer-container").style
    if (!userData) {
        divContent.backgroundColor = "#FFA07A";
        divContent.color = "#FFFFFF";
    } else {
        let favoriteBgc = userData.bgc;
        divContent.backgroundColor = favoriteBgc;
        let favoriteColor = userData.color;
        divContent.color = favoriteColor;
    }
}