const Pusher = require("pusher");
require("dotenv").config();

const pusher = new Pusher({
  appId: process.env.appId,
  key: process.env.key,
  secret: process.env.secret,
  cluster: process.env.cluster,
  useTLS: process.env.useTLS,
});

pusher.trigger("my-channel", "my-event", {
  message: "Hi my name is sajad",
});
