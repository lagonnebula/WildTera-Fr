module.exports = {
    profile: {
        localeName: 'fr',
        title: 'Votre compte',
        logout: 'Déconnexion',
        alert: {
            error: 'Erreur',
            "testServerWarning": "Vous êtes dans la zone des serveurs de test. " +
            "Un compte différent est nécessaire pour jouer. Les clés Early-Access ne marche pas pour cette zone.",
            "testServerAd": "Vous aimez notre projet ? Vous voulez jouer avec toutes les recettes ? Supportez-nous !",
            "testServerBuy": "Achetez une clé",
            "testServerBuyLink": "http://www.playwildterra.com/#showCaseScreen",
            messages: {
                "CODE_NOT_FOUND": "Code non trouvé",
                "CODE_ALREADY_USED": "Code déja utilisé",
                "Unauthorized": "Echec d'authentification"
            }
        },
        userInfo: {
            yes: 'Oui',
            no: 'Non',
            email: 'Email',
            canPlay: 'Accès',
            gold: 'Or',
            premium: 'Premium',
            enterCode: 'Validez un Code',
            backToProfile: 'Liste des Serveurs',
            addGold: 'Boutique'
        },
        codeForm: {
            title: 'Entrez le code d\'acces anticipé au jeu',
            titleSecond: 'Entrez votre code',
            inputHint: 'Code d\'acces',
            submit: 'Envoyer',
            getCode: 'Besoin d\'un code ? Récupérez-en un ici ...',
            success: 'Félicitation, code validé'
        },
        "closed": {
            "enterTitle": "Testing completed",
            "closedHtml": "<p>Update is set to the main servers area.</p>" +
            "<p>Thank you all for participating in the testing!</p>" +
            "<p><a target='_blank' type='button' class='btn btn-success' role='button' href='http://files.playwildterra.com/'>Download client to play in the main servers area...</a></p>" +
            "<p>Note that to play in the main area separate account needed.</p>"
        },
        "needUpdate": {
            "enterTitle": "Please update game client",
            "updateHtml": "<p>You should use game client version 0.{version}</p>" +
            "<p><a target='_blank' type='button' class='btn btn-success' role='button' href='{downLoadLink}'>Download new version...</a></p>"
        },
        serverList: {
            title: 'Liste des Serveurs',
            servers: {
                America: {
                    name: 'Amerique',
                    description: 'Règles normales. JcJ ouvert, desctruction de batiments, plein de butins. ' +
                    'Il est nécessaire de trouver les schémas pour les objets et les batiments complexe. ' +
                    'Le serveur est situé en Amérique du nord.'
                },
                Europe: {
                    name: 'Europe',
                    description: 'Règles normales. JcJ ouvert, desctruction de batiments, plein de butins. ' +
                    'Il est nécessaire de trouver les schémas pour les objets et les batiments complexe. ' +
                    'Le serveur est situé en Europe.'
                },
                Europe2: {
                    name: 'Europe 2',
                    description: 'Règles normales. JcJ ouvert, desctruction de batiments, plein de butins. ' +
                    'Il est nécessaire de trouver les schémas pour les objets et les batiments complexe. ' +
                    'Le serveur est situé en Europe.'
                },
                Europe3: {
                    name: 'Europe 3',
                    description: 'Règles normales. JcJ ouvert, desctruction de batiments, plein de butins. ' +
                    'Il est nécessaire de trouver les schémas pour les objets et les batiments complexe. ' +
                    'Le serveur est situé en Europe.'
                },
                DevBetelgeuse: {
                    name: 'Guerre',
                    description: 'Serveur de combats et de sièges.'
                },
                Test: {
                    name: 'Test',
                    description: 'Serveur de test. La vie et l\'endurance ne sont pas consommés. Toutes les recettes et batiments disponible instantanément. ' +
                    'Production plus rapide.'
                },
                DevAlnilam: {
                    name: 'Hardcore',
                    description: 'Pour les vrai fan de difficultés. Vous pouvez construire et fabriquer sans avoir à trouver les recettes. ' +
                    'Les animaux sont plus puissant mais plus rare. Les ressources du monde sont moindre et plus longue à pousser.'
                },
                DevBellatrix: {
                    name: 'Trial',
                    description: 'Règles normales. cJ ouvert, desctruction de batiments, plein de butins. ' +
                    'Il est nécessaire de trouver les schémas pour les objets et les batiments complexe.'
                },
                Local: {
                    name: 'Local',
                    description: 'Pas disponible.'
                }
            },
            button: {
                online: 'Jouer',
                wrongVersion: 'Mauvaise version',
                offline: 'Offline'
            },
            clientUriNotFound: 'Pour acceder à la liste des serveurs vous devez être connecté'
        }
    },

    "showcase": require('wt-showcase/app/scripts/locales/fr-FR').showcase
};
