module.exports = {
    showcase: {
        special072105: 'Summer Special! Valid only until 10 August.',
        specia20150901: 'Special!',
        card: {
            price: '{value} ' +
            '{oldPrice, plural,' +
                '=0 {}' +
                'other {<span class="oldPrice">{oldPrice, number}</span>}' +
            '}',
            buy: 'Buy'
        },
        bundles: {
            knight_key: {
                name: 'Early Access Bundle “Knight”',
                description: '<ul>' +
                '<li>Title: “Knight”.</li>' +
                '<li>10 premium days and 1,000 gold.</li>' +
                '<li>Participate in the development of the game.</li>' +
                '<li>The key of early access.</li>' +
                '</ul>'
            },
            baron_keys: {
                name: 'Early Access Bundle “Baron”',
                description: '<ul>' +
                '<li>Title: “Baron”.</li>' +
                '<li>Unique recipes of noble breastplate.</li>' +
                '<li>15 premium days and 1,600 gold.</li>' +
                '<li>Participate in the development of the game.</li>' +
                '<li>Your name in the credits.</li>' +
                '<li>The key of early access.</li>' +
                '</ul>'
            },
            viscount_keys: {
                name: 'Early Access Bundle “Viscount”',
                description: '<ul>' +
                '<li>Title: “Viscount”.</li>' +
                '<li>Unique recipes of noble breastplate, leggings and shield.</li>' +
                '<li>25 premium days and 2,200 gold.</li>' +
                '<li>Participate in the development of the game.</li>' +
                '<li>Your name in the credits.</li>' +
                '<li>The key of early access.</li>' +
                '</ul>'
            },
            earl_keys: {
                name: 'Early Access Bundle “Earl”',
                description: '<ul>' +
                '<li>Title: “Earl”.</li>' +
                '<li>Unique recipes of noble breastplate, leggings, sword and shield.</li>' +
                '<li>35 premium days and 2,800 gold.</li>' +
                '<li>Participate in the development of the game.</li>' +
                '<li>Your name in the credits.</li>' +
                '<li>The key of early access.</li>' +
                '</ul>'
            },
            marquis_keys: {
                name: 'Early Access Bundle “Marquis”',
                description: '<ul>' +
                '<li>Title: “Marquis”.</li>' +
                '<li>Unique recipes of noble breastplate, leggings, greaves, gloves, sword and shield.</li>' +
                '<li>60 premium days and 4,500 gold.</li>' +
                '<li>Participate in the development of the game.</li>' +
                '<li>Your name in the credits.</li>' +
                '<li>The key of early access.</li>' +
                '</ul>'
            },
            duke_keys: {
                name: 'Early Access Bundle “Duke”',
                description: '<ul>' +
                '<li>Title: “Duke”.</li>' +
                '<li>Unique recipes of noble breastplate, leggings, greaves, gloves, sword, shield and cloak.</li>' +
                '<li>80 premium days and 6,000 gold.</li>' +
                '<li>Participate in the development of the game.</li>' +
                '<li>Your name in the credits.</li>' +
                '<li>The key of early access.</li>' +
                '</ul>'
            }
        },
        dialog: {
            errors: {
                required: "Required field",
                wrong: "Error in email address"
            },
            input: 'Enter your email',
            cancel: 'Cancel',
            continue: 'Continue',
            bundleTitle: 'Bundle consist of',
            emailTitle: 'Email address',
            emailText: 'After paying you will get the early access bundle.',
            agreeHtml: '<p>Some payment systems may add their commission to the price. VAT added only for EU countries. ' +
            'With a clicking "Buy" button, you are accepting the terms of <a target="_blank" href="/eula.pdf">this service agreement</a>.</p>',
            requirements: '<p><b>System requirements</b><br/>\
               Operating System: Windows XP/Vista/7/8 or better, Linux or Mac OS.<br/>\
               CPU: 2,2 GHz or higher. RAM: more than 2 GB.\
               Video memory: 256 MB or more. Free space on hard drive: 200 MB.<br/>\
               Internet connection speed: 256 Kbps or higher</p>'
        },
        currency: 'USD',
        currencyForPayment: false,
        RUB: 'RUB',
        EUR: 'EUR',
        USD: 'USD',
        PLN: 'PLN',
        localeName: 'en'
    }
};
