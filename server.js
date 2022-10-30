const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

const port = +process.env.PORT || 5555;
const pubkey = process.env.PUBKEY;
const username = process.env.NAME || "_";

const nostr = JSON.parse(`
    {
        "names": {
            "${username}": "${pubkey}"
        }
    }
`);

// Need CORS for nostr web clients to be able to make requests to this server
app.use((_, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// Serve the json file required by nostr clients with NIP-05
app.get("/.well-known/nostr.json", (_, res) => {
	res.json(nostr);
});

app.get("/", (_, res) => {
	res.render(path.join("index"), { pubkey, username });
});

app.listen(port, () => {
	console.log("App is running on ", port);
});
