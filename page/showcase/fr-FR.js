module.exports = {
    showcase: {
        special072105: 'Spécial Eté ! Valide jusqu\'aux 10 Août.',
        specia20150901: 'Spécial !',
        card: {
            price: '{value} ' +
            '{oldPrice, plural,' +
                '=0 {}' +
                'other {<span class="oldPrice">{oldPrice, number}</span>}' +
            '}',
            buy: 'Acheter'
        },
        bundles: {
            knight_key: {
                name: 'Pack d\'accès anticipé "Chevalier"',
                description: '<ul>' +
                '<li>Titre: "Chevalier".</li>' +
                '<li>10 jours premium et 1,000 Or.</li>' +
                '<li>Participez au développement du jeu.</li>' +
                '<li>Clé pour l\'accès anticipé.</li>' +
                '</ul>'
            },
            baron_keys: {
                name: 'Pack d\'accès anticipé "Baron"',
                description: '<ul>' +
                '<li>Titre: "Baron".</li>' +
                '<li>Recêtte unique pour l\'armure de Noble.</li>' +
                '<li>15 jours premium et 1,600 Or.</li>' +
                '<li>Participez au développement du jeu.</li>' +
                '<li>Votre nom dans les crédits.</li>' +
                '<li>Clé pour l\'accès anticipé.</li>' +
                '</ul>'
            },
            viscount_keys: {
                name: 'Pack d\'accès anticipé "Vicomte"',
                description: '<ul>' +
                '<li>Titre: "Vicomte".</li>' +
                '<li>Recêtte unique pour l\'armure, les jambières et le bouclier de Noble.</li>' +
                '<li>25 jours premium et 2,200 Or.</li>' +
                '<li>Participez au développement du jeu.</li>' +
                '<li>Votre nom dans les crédits.</li>' +
                '<li>Clé pour l\'accès anticipé.</li>' +
                '</ul>'
            },
            earl_keys: {
                name: 'Pack d\'accès anticipé "Comte"',
                description: '<ul>' +
                '<li>Titre: "Comte".</li>' +
                '<li>Recêtte unique pour \'armure, les jambières, l\'arme et le bouclier de Noble.</li>' +
                '<li>35 jours premium et 2,800 Or.</li>' +
                '<li>Participez au développement du jeu.</li>' +
                '<li>Votre nom dans les crédits.</li>' +
                '<li>Clé pour l\'accès anticipé.</li>' +
                '</ul>'
            },
            marquis_keys: {
                name: 'Pack d\'accès anticipé "Marquis"',
                description: '<ul>' +
                '<li>Titre: "Marquis".</li>' +
                '<li>Recêtte unique pour l\'armure, les jambières, les Solerets, les gantelet, l\'arme et le bouclier de Noble.</li>' +
                '<li>60 jours premium et 4,500 Or.</li>' +
                '<li>Participez au développement du jeu.</li>' +
                '<li>Votre nom dans les crédits.</li>' +
                '<li>Clé pour l\'accès anticipé.</li>' +
                '</ul>'
            },
            duke_keys: {
                name: 'Pack d\'accès anticipé "Duc"',
                description: '<ul>' +
                '<li>Titre: "Duc".</li>' +
                '<li>Recêtte unique pour l\'armure, les jambières, les Solerets, les gantelet, l\'arme, le bouclier et la cape de Noble.</li>' +
                '<li>80 jours premium et 6,000 Or.</li>' +
                '<li>Participez au développement du jeu.</li>' +
                '<li>Votre nom dans les crédits.</li>' +
                '<li>Clé pour l\'accès anticipé.</li>' +
                '</ul>'
            }
        },
        dialog: {
            errors: {
                required: "Champ requis",
                wrong: "Adresse mail invalide"
            },
            input: 'Votre adresse mail',
            cancel: 'Annuler',
            continue: 'Continuer',
            bundleTitle: 'Le pack est composé de',
            emailTitle: 'Adresse mail',
            emailText: 'Après le paiement vous recevrez l\'Accès anticipé.',
            agreeHtml: '<p>Certain système de paiement ajouterons leurs comission au prix. TVA seulement pour l\'Europe. ' +
            'En appuyant sur "Acheter", vous acceptez les termes de With a clicking "Buy" button, you are accepting the terms of <a target="_blank" href="/eula.pdf">l\'accord de license</a>.</p>',
            requirements: '<p><b>System requirements</b><br/>\
               Système d\'exploitation: Windows XP/Vista/7/8 ou plus, Linux ou Mac OS.<br/>\
               CPU: 2,2 GHz ou plus. RAM: plus de 2 GB.\
               Mémoire vidéo: 256 MB ou plus. Espace disque libre: 200 MB.<br/>\
               Connexion internet: 256 Kbps ou plus</p>'
        },
        currency: 'EUR',
        currencyForPayment: false,
        RUB: 'RUB',
        EUR: 'EUR',
        USD: 'USD',
        PLN: 'PLN',
        localeName: 'fr'
    }
};
