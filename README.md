# Nostr NIP-05 Demo

[Nostr](https://github.com/fiatjaf/nostr) is a protocol aimed at creating a censorship-resistant global social network. The [NIP-01](https://github.com/fiatjaf/nostr/blob/master/nips/01.md) (Nostr Implementation Possibility - 01) defines the basic protocol.

## NIP-05

NIP-05 lets people map nostr keys to DNS-based internet identifiers (think of email or lightning addresses). Use this server with your own domain to test out nostr addresses.

## How to use this repo

- Create an .env file similar to the .env.example file
- Change the pubkey from 0000s to your nostr pubkey
- run ```npm ci``` to install the required packages 
- run ```npm run start``` to start the server