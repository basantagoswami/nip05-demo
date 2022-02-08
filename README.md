# Nostr NIP-05 Demo

[Nostr](https://github.com/fiatjaf/nostr) is a protocol aimed at creating a censorship-resistant global "social" network. The NIP-01 (Nostr Implementation Possibility - 01) defines the basic protocol.

## NIP-05

NIP-05 lets people map Nostr keys to DNS-based internet identifiers (think of email or lightning addresses). Use this repo with your own domain and hosting or with a free service like heroku. This repo was made to be served using heroku.

## How to use this repo

### Must:

* Change the 000s to your nostr pubkey on server.js - line 14

### Optional:

* Change the index.html file to display your pubkey or some webpage

### Running locally:

* Use a port number such as 3000 or 5000 on the .env file

### Running on heroku

* Follow [this guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)