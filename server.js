const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()
const path = require('path');


/* names._ = domain.com
 * names.user = user@domain.com
 * Don't forget to change the 000s with your nostr pubkey
*/
const nostr = {
    "names": {
        "_": "0000000000000000000000000000000000000000000000000000000000000000"
    }
}

// Need CORS for your web client to be able to make requests to another website
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve the json file required by nostr clients with NIP-05
app.get('/.well-known/nostr.json', (req, res) => {
    res.json(nostr);
});

// Serve a webpage if you want to
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(process.env.PORT, () => {
    console.log("App is running on ", process.env.PORT);
})