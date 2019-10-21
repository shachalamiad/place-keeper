'use-strict'

function onInit() {
    var userData = getUserData();
    renderUserFavoriteColors(userData);
    renderUserAstrology(userData);
}


function renderUserFavoriteColors(userData) {
    let divContent = document.querySelector(".favorite").style
    if (!userData) {
        divContent.backgroundColor = "#9932CC";
        divContent.color = "#FFFFFF";
    } else {
        let favoriteBgc = userData.bgc;
        divContent.backgroundColor = favoriteBgc;
        let favoriteColor = userData.color;
        divContent.color = favoriteColor;
    }
}

function renderUserAstrology(userData) {
    let divContent = document.querySelector(".favorite");
    if (!userData) { return }
    let userName = userData.name;
    if (!userData.birthDate) {
        document.querySelector(".favorite span").innerHTML = `${userName} : `
        return;
    } else {
        divContent.innerHTML = astrologyForecast()
    }
}

function astrologyForecast() {
    let Astrology = [];
    Astrology[0] = `Your astrology forecast: You will enjoy worldwide peace <br> ${renderAstrologyImage(0)}`;
    Astrology[1] = `Your astrology forecast: You will be contacted by an old friend <br> ${renderAstrologyImage(1)}`;
    Astrology[2] = `Your astrology forecast: You will win the Lottery next year <br> ${renderAstrologyImage(2)}`;
    Astrology[3] = `Your astrology forecast: Spring will shine to you all along <br> ${renderAstrologyImage(3)}`;
    let i = Math.floor(4 * Math.random())
    return Astrology[i];
}

function renderAstrologyImage(i) {
    let elAstrologyImage = document.querySelector('.astology-image');
    if (i === 0) {
        elAstrologyImage.innerHTML = `<img src="imgs/peace.jpg"/>`;
    } else if (i === 1) {
        elAstrologyImage.innerHTML = `<img src="imgs/friend.jpg"/>`;
    } else if (i === 2) {
        elAstrologyImage.innerHTML = `<img src="imgs/lottery.jpg"/>`
    } else {
        elAstrologyImage.innerHTML = `<img src="imgs/spring.jpg"/>`
    }
    return elAstrologyImage.innerHTML;
}

function showAge(newVal) {
    document.getElementById("sAge").innerHTML = newVal;
}

function onSubmitForm() {
    event.preventDefault();
    var elUserName = document.getElementById("name").value;
    var userName = elUserName;
    var elUserFavoritBGC = document.getElementById("background-color").value;
    var userBGC = elUserFavoritBGC;
    var elUserFavoritColor = document.getElementById("color").value;
    var userColor = elUserFavoritColor;
    var elUserBirthDate = document.getElementById("birth-date").value;
    var userBirthDate = elUserBirthDate;
    var elUserBirthTime = document.getElementById("birth-time").value;
    var userBirthTime = elUserBirthTime;
    var elUserAge = document.getElementById("age").value;
    var userAge = elUserAge;
    var elUserEMail = document.getElementById("email").value;
    var userEMail = elUserEMail;
    renderSubmitModal();
    createUser(userName, userBGC, userColor, userBirthDate, userBirthTime, userAge, userEMail);
}

function renderSubmitModal() {
    var elSubmitFormModal = document.querySelectorAll("footer");
    elSubmitFormModal.item(0).style.display = 'block';
    var strHTML = '';
    strHTML += `
    <div class="add-form-modal">
    Thank you! Now please return to home page
    <button class="home-page" onclick="onReturnToHomePage()">Home Page</button>
    </div>`
    elSubmitFormModal.item(0).innerHTML = strHTML;
}
    
function onReturnToHomePage() {
    window.location = "./index.html";
}

function onSetLang(lang) {
    setLang(lang);
    // if (lang === 'he') {
    //     document.body.classList.add('rtl');
    // } else {
    //     document.body.classList.remove('rtl');
    // }
    doTrans();
    // renderSomething();
}

