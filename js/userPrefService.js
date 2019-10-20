'use-strict'
const User_DATA_KEY = 'userData';
var gNextId = 101;
var gUserData;

function createUser(name, BGC, color, birthDate, birthTime, age, EMail) {
    let userData = {
        // id: gNextId++,
        name: name,
        bgc: BGC,
        color: color,
        birthDate: birthDate,
        birthTime: birthTime,
        age: age,
        EMail: EMail
    }
    gUserData = userData;
    saveUserDataToStorage(gUserData);
    return userData;
}

function getUserData() {
    var userData = loadUserDataFromStorage();
    if (!userData) return;
    return userData;
}

function saveUserDataToStorage(userData) {
    saveToStorage(User_DATA_KEY, userData)
}

function loadUserDataFromStorage() {
    return loadFromStorage(User_DATA_KEY);
}