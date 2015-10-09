module.exports = {
  "header": {
    "title": "Wild Terra - Authentification"
  },
  "login": {
    "enterTitle": "Se connecter",
    "email": "Mail",
    "password": "Mot de passe",
    "submit": "Connexion",
    "noSignedYet": "Pas encore inscrit ?",
    "goSignUp": "Inscription !",
    "title": "Wild Terra - Connexion"
  },
  "signUp": {
    "signUpTitle": "Inscrition facile",
    "email": "Mail",
    "password": "Mot de passe",
    "submit": "Inscription",
    "alreadySigned": "Déjà inscrit ?",
    "goLogin": "Connectez-vous !",
    "title": "Wild Terra - Inscription",
    "forgotPassword": "Mot de passe perdu ?",
    "goForgot": "Récupèrez-le!"
  },
  "testServerWarning": "Vous êtes dans la zone des serveurs de test. " +
  "Un compte différent est nécessaire pour jouer. Les clés Early-Access ne marche pas pour cette zone.",
  "forgot": {
    "title": "Wild Terra - Récupération de mot de passe",
    "enterTitle": "Récupérez votre mot de passe",
    "submit": "Récupérer",
    "cancel": "Annuler",
    "emailTemplate": {
      from: 'support@playwildterra.com',
      fromName: 'Wild Terra',
      subject: 'Ré-Initialisation de mot de passe',
      templateID: 'aa56be6c-bae4-4309-be2b-556db5926d50'
    },
    "messages": {
      "invalidAccount": "Compte inexistant avec cette adresse mail",
      "invalidEmail": "Impossible d'envoyé un mail à cette adresse",
      "sendedOk": function(email) {
        return  'Un mail à été envoyé à ' + email + ' avec plus d\'informations.';
      }
    }
  },
  "reset": {
    "title": "Wild Terra - Ré-Initialisation de mot de passe",
    "enterTitle": "Nouveau mot de passe",
    "submit": "Valider",
    "cancel": "Annuler",
    "confirm": "Confirmation de mot de passe",
    "emailTemplate": {
      from: 'support@playwildterra.com',
      fromName: 'Wild Terra',
      subject: 'mot de passe modifié avec succès',
      templateID: '81fe066a-4b94-46f0-bf5c-dd1f680e350a'
    },
    "messages": {
      "passwordsNotEqual": "Les mots de passes ne sont pas identiques",
      "invalidToken": "La clef de ré-initialisation à expirés ou est invalide",
      "invalidEmail": "Impossible d'envoyé un mail à cette adresse",
      "passwordChanged": "Réussis! Votre mot de passe à été changé"
    }
  }
};