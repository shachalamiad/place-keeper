'use strict'

var gCurrLang = 'en';

var gTrans = {
    userform: {
        en: 'User Form',
        he: 'טופס משתמש'
    },
    services: {
        en: 'Services',
        he: 'שירותים'
    },
    policy: {
        en: 'Policy',
        he: 'מדיניות'
    },
    contact_us: {
        en: 'Contact Us',
        he: 'צור קשר'
    },
    map: {
        en: 'map',
        he: 'מפה'
    },
    enter_birth_date: {
        en: 'Please enter your birth-date in the user form to obtain an astrology forecast (in your favorite colors).',
        he: 'אנא הזן את תאריך יום ההולדת בטופס המשתמש כדי לקבל תחזית אסטרולוגית, ברקע הצבעים האהובים עליך '
    }
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        var transKey = el.dataset.trans;
        var txt = getTrans(transKey);
        el.innerText = txt;
    }
}

function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];
    if (!txt) txt = keyTrans['en'];

    return txt;
}

function setLang(lang) {
    gCurrLang = lang;
}