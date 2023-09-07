import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();
const port = 8000;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api", router);

app.get("/webhook", (req, res) => {
  const challenge = req.query["hub.challenge"];
  console.log(req.query)
  console.log(challenge);
  //if block
  console.log(typeof(challenge));
  res.set('Content-Type', 'text/plain');
  res.status(200).send(challenge);
});

app.listen(port, () => {
  console.log(`Server running successfully on port ${port}`);
});

//we are getting the response when we hit http://localhost:8000/api/webhook

// https://e1d3-2401-4900-3e98-b2a4-fcf7-3ec7-c7c7-3c6c.ngrok.io

// https://2603-210-212-2-165.ngrok.io

//the token we get for webhooks is helpdeskv2@123
