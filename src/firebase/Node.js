var admin = require("firebase-admin");

var serviceAccount = require("/home/zamagcina/bug-tracker-e606b-firebase-adminsdk-fbsvc-ab546ce6e8.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
