var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIKrmCopG9sPwkEktUHwLZ_Fe1aI5Fh9Wx8HdeThGbExgRdP83PBSESYSuoEvizZ3Ainor7sH8wxH3FNwkYYXrc', 
     privateKey: 'OL67dnCNAsVWBNBH-8BHQ4vqFLwbu8-mfLXgGkuOlmw'
  }

  push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};
  push.sendNotification(sub, 'test message')
