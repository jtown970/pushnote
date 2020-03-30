var push = require('web-push');

let vapidKeys = {
    publicKey: 'BIKrmCopG9sPwkEktUHwLZ_Fe1aI5Fh9Wx8HdeThGbExgRdP83PBSESYSuoEvizZ3Ainor7sH8wxH3FNwkYYXrc', 
     privateKey: 'OL67dnCNAsVWBNBH-8BHQ4vqFLwbu8-mfLXgGkuOlmw'
  }

  push.setVapidDetails('mailto:test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eOEgFHHv1-E:APA91bFV_fG4WIJtJgS_GNMN7zxjD0XAXqHIdnH4Cr3YFmx8g4vxkfThxwAbfCSezk_u1sFqHZiinX1MsBzZBOtw7LJ9zv2xnbVzcjK3R80xGnhG5QNpS1DT99i1_GpY3PN5tPmGs9NJ","expirationTime":null,"keys":{"p256dh":"BEGMdeVv2fmcJJlvowe_w7eN56t9giXRO41a_E5ETkylyiN04lL-_ZqPVE2uNh1s1IpvUafEapVjfdRmHTgUiTE","auth":"zI5u_tsH6kkhq2qwV91iMA"}}
  push.sendNotification(sub, 'test message')
