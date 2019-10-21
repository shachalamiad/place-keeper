'use-strict'

function onInitMap() {
    window.location = "./map.html";
}

function onMapClick(latLng) {
    var elLatLng = JSON.stringify(latLng);
    var latIndex = elLatLng.indexOf(":");
    var longIndex = elLatLng.indexOf(":", latIndex + 1);
    var lat = elLatLng.substring(latIndex + 1, latIndex + 8);
    var long = elLatLng.substring(longIndex + 1, longIndex + 8);
    var locationName = createUserLocationName();
    onAddUserLocation(lat, long, locationName);
}

function onAddUserLocation(lat, long, locationName) {
    addUserLocation(lat, long, locationName);
    renderUserLocations();
}

function renderUserLocations() {
    var userLocations = getLocations();
    var strHTMLs = userLocations.map(function (location) {
        return `
        <li>
        ${location.locationName} @ ${location.lat} : ${location.long}
        <button class="rmv-location-btn" onclick="onRemoveLocation(${location.id})">[X]</button>
        </li>`
    })
    document.querySelector('.user-coordinates').innerHTML = strHTMLs.join('');
    renderDivColors();
}

function onRemoveLocation(el) {
    var isSure = confirm('Are you sure?')
    if (!isSure) return;
    removeUserLocation(el);
    renderUserLocations();
}

function renderDivColors() {
    var userData = getUserData();
    let divContent = document.querySelector(".places-container").style
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