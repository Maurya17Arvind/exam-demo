require("dotenv").config({ path: "variables.env" });
const express = require("express");
const cors = require("cors");
const webPush = require("web-push");
const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.urlencoded({ extended:false}));
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Push notification.')
})
const vapidKeys = {
  publicKey: "BKNeGqOcQtPcNRQq1UTWkwval2C6uOjAVw-TdHhzCJwl5hlaV3ieKn3evz6R84hQKO0kW_MNUiOaadaL6fnusJI",
  privateKey: "KXCCf0oLufSnNPeT3L8MNbAqc7kGduyFAmcBdL4z-ZA"
};

const publicVapidKey = vapidKeys.publicKey;
const privateVapidKey = vapidKeys.privateKey;
webPush.setVapidDetails(
  "mailto:arvind.tagline@gmail.com",
  publicVapidKey,
  privateVapidKey
);

app.post("/notifications", (req, res) => {
  const subscription = req.body.notification;
  console.log(`Subscription received`);
  res.status(201).json({});
  const payload = JSON.stringify({
    notification: {
      title: "Tagline Infotech LLP",
      body: "Empowering Ideas With Innovation & Technology",
      icon: "https://taglineinfotech.com/wp-content/uploads/2021/02/favicon.png",
      vibrate: [100, 50, 100],
      data: {
        url: "https://taglineinfotech.com/",
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