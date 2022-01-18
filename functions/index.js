const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51KEXdGSJCC56qf4tSCr6msnNd8LvUkNorOJh1VbcJf3DHmstT9r99heb48sjLKdCEqJJi8pMAWPvtzaA4mPr9q6Y00NYJageOj"
);

//API

//App Config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello amazon"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  console.log(paymentIntent);

  //ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//example endpoint
// http://localhost:5001/clone-9a4e9/us-central1/api
