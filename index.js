const express = require("express");
const app = express();

import { Magic } from 'magic-sdk';

const magic = new Magic('pk_live_A2C1FC5327BEC218');

magic.auth;
magic.auth.loginWithMagicLink;
magic.auth.loginWithEmailOTP;
magic.auth.loginWithSMS;
magic.auth.loginWithCredential;
magic.auth.updateEmailWithUI;

app.get("/", (req, res) => {
   Res.writeHead(200, { "Content-Type": "application/json" });
   Res.write(JSON.stringify({ "Status": "Working" }));
   Res.end();
});

app.listen(5000, () => {
   console.log("online")
});