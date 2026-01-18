const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const apiKey = process.env.APIKEY;

app.get("/api/data/steamUser", async (req, res) => {
    try {
        const response = await fetch(
            `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${apiKey}&steamids=76561197997082575`
        );
        const data = await response.json();
        res.json(data);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Noe gikk galt" });
    }
});


app.listen(3000);