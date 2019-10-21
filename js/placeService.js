'use-strict'

const User_Location_KEY = 'user-location';
var gUserLocations;
var gNextId = 101;

createUserLocations();

function createUserLocations() {
    var locations;
    if (!locations || locations.length === 0) {
        locations = [createUserLocation(29.5580, 34.9482, 'Eilat')];
    }
    gUserLocations = locations;
    saveUserLocationsToStorage()
}


function createUserLocation(lat, long, locationName) {
    var userLocation = {
        id: gNextId++,
        locationName: locationName,
        lat: lat,
        long: long
    }
    return userLocation;
}
function addUserLocation(lat, long, locationName) {
    var userLocation = createUserLocation(lat, long, locationName);
    gUserLocations.push(userLocation);
    saveUserLocationsToStorage();
}

function createUserLocationName() {
    var locationName = prompt(`Please enter location name`);
    return locationName;
}

function getLocations() {
    let userLocations = loadUserLocationsFromStorage();
    if (!userLocations) return;
    return userLocations;
}


function getUserData() {
    let userData = loadUserDataFromStorage();
    if (!userData) return;
    return userData;
}

function removeUserLocation(locationId) {
    var locationIdx = gUserLocations.findIndex(function(location){return location.id === locationId})
    if (locationIdx === -1) return;
    gUserLocations.splice(locationIdx, 1);
    saveUserLocationsToStorage();
    return locationIdx;
}

function saveUserLocationsToStorage() {
    saveToStorage(User_Location_KEY, gUserLocations)
}

function loadUserLocationsFromStorage() {
    return loadFromStorage(User_Location_KEY);
}
