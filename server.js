const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static("./dist/exam-demo"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/exam-demo/" })
);

// Start SwPush
// const webpush = require("web-push");
// console.log(webpush.generateVAPIDKeys());
// const publicKey =
//   "BEz285PUXIx76SaGW6IZxbBGM7jdGHzESF1r7dCjwoeuPtXATHxd_WMwoQO4prqSa2dUXohqXbB01ihKq6HOTTo";
// const privateKey = "pZvm-9C9yMdtJFsLaWLOZ8O0vsxCSo3EOKL9HpsIUX4";

// const sub = {
//   endpoint: "https://fcm.googleapis.com/fcm/send/eG64DzM8Is0:APA91bFFhoFmn2TTfCiwm_cWNxPMuJ1A0BqArwrlxaB10yXx8J7NsUZu_y43Z-2meNRn6AXTaAs2vzQXNB7oeT-bAY-vFXfxtfYIPkTp9_5IjylS1u18CIBXY4Yh36GZyaBRPL_Eiyrr",
//   expirationTime: null,
//   keys: {
//     p256dh: "BEysPdIpmSAnkaY7IjEUSMV7y4yyoljEAbQDm3tvCNxwVx6XZg90TtiTGwwm_cQTjkBADsOsHLwM6G5mbWWOloY",
//     auth: "s8TiDMEtJjEpwdJ3S9oFEg"
//   }
// }
// webpush.setVapidDetails('mailto:arvind.tagline@gmail.com', publicKey, privateKey);

// const payload = {
//   notification: {
//     data: { url: "https://exam-demo-arvind.herokuapp.com/teacher" },
//     title: "PUSH MESSAGE",
//     vibrate: [300, 100, 400, 100, 400, 100, 400],
//     icon: "ICON_URL",
//     tag: "push demo",
//     requireInteraction: true,
//     renotify: true,
//     data: { url: "https://google.com" },
//   },
// };
// webpush.sendNotification(sub, JSON.stringify(payload));



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
