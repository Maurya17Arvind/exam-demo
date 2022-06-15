// const express = require("express");
// const path = require("path");

// const app = express();

// const cors = require("cors");
// const webPush = require("web-push");
// const bodyParser = require("body-parser");
//Serve only the static files form the dist directory
// app.use(express.static("./dist/exam-demo"));
// app.use(cors());
// app.use(bodyParser.json());
// app.get("/*", (req, res) =>
//   res.sendFile("index.html", { root: "dist/exam-demo/" })
// );

// Start SwPush
// const webpush = require("web-push");
// console.log(webpush.generateVAPIDKeys());
// const publicKey =
//   "BEz285PUXIx76SaGW6IZxbBGM7jdGHzESF1r7dCjwoeuPtXATHxd_WMwoQO4prqSa2dUXohqXbB01ihKq6HOTTo";
// const privateKey = "pZvm-9C9yMdtJFsLaWLOZ8O0vsxCSo3EOKL9HpsIUX4";
// webpush.setVapidDetails(
//   "arvind.tagline@gmail.com",
//   publicKey,
//   privateKey
// );

// app.post("/notifications", (req, res) => {
//   const subscription = req.body.notification;
//   console.log(`Subscription received`);
//   res.status(201).json({});
//   const payload = JSON.stringify({
//     notification: {
//       title: "Notifications are cool",
//       body: "Know how to send notifications through Angular with this article!",
//       icon: "https://www.shareicon.net/data/256x256/2015/10/02/110808_blog_512x512.png",
//       vibrate: [100, 50, 100],
//       data: {
//         url: "https://medium.com/@arjenbrandenburgh/angulars-pwa-swpush-and-swupdate-15a7e5c154ac",
//       },
//     },
//   });
//   webPush
//     .sendNotification(subscription, payload)
//     .catch((error) => console.error(error));
// });
//  const sub = {
//    endpoint: "https://fcm.googleapis.com/fcm/send/eG64DzM8Is0:APA91bFFhoFmn2TTfCiwm_cWNxPMuJ1A0BqArwrlxaB10yXx8J7NsUZu_y43Z-2meNRn6AXTaAs2vzQXNB7oeT-bAY-vFXfxtfYIPkTp9_5IjylS1u18CIBXY4Yh36GZyaBRPL_Eiyrr",
//    expirationTime: null,
//    keys: {
//      p256dh: "BEysPdIpmSAnkaY7IjEUSMV7y4yyoljEAbQDm3tvCNxwVx6XZg90TtiTGwwm_cQTjkBADsOsHLwM6G5mbWWOloY",
//      auth: "s8TiDMEtJjEpwdJ3S9oFEg"
//    }
//  }

//  const payload = {
//    notification: {
//      data: { url: "https://exam-demo-arvind.herokuapp.com/teacher" },
//      title: "PUSH MESSAGE",
//      vibrate: [300, 100, 400, 100, 400, 100, 400],
//      icon: "ICON_URL",
//      tag: "push demo",
//      requireInteraction: true,
//      renotify: true,
//   },
//  };
//  webpush.sendNotification(sub, JSON.stringify(payload));



//  Start the app by listening on the default Heroku port
// app.set("port", process.env.PORT || 5000);
// const server = app.listen(app.get("port"), () => {
//   console.log(`Express running → PORT ${server.address().port}`);
// });
//  app.listen(process.env.PORT || 8080);
//Install express server
// const express = require('express');
const path = require('path');

// const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/exam-demo'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/exam-demo/'}),
);
require("dotenv").config({ path: "variables.env" });
const express = require("express");
const cors = require("cors");
const webPush = require("web-push");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;
webPush.setVapidDetails("test@example.com", publicVapidKey, privateVapidKey);
app.post("/notifications", (req, res) => {
  const subscription = req.body.notification;
  console.log(`Subscription received`);
  res.status(201).json({});
  const payload = JSON.stringify({
    notification: {
      title: "Notifications are cool",
      body: "Know how to send notifications through Angular with this article!",
      icon: "https://www.shareicon.net/data/256x256/2015/10/02/110808_blog_512x512.png",
      vibrate: [100, 50, 100],
      data: {
        url: "https://medium.com/@arjenbrandenburgh/angulars-pwa-swpush-and-swupdate-15a7e5c154ac",
      },
    },
  });
  webPush
    .sendNotification(subscription, payload)
    .catch((error) => console.error(error));
});
app.set("port", process.env.PORT || 5000);
const server = app.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);