ALPHABLOX ONLINE SERVER

What this package includes:
- index.html: AlphaBlox browser game. Turbo Rush remains offline and its game code is unchanged.
- server.js: web server plus a PeerJS signaling endpoint used for room-code multiplayer.
- package.json: server dependencies and start command.

IMPORTANT
This is a deployable online package, but it is NOT live on the internet until you deploy it to a Node.js host. Both players must use the same hosted website URL. The room-code multiplayer is currently for Spirit Duel and Arena Clash. The separate Friends/account system still uses the original embedded platform API and is not made cross-device by this package.

DEPLOY ON A NODE.JS HOST
1. Upload the contents of this folder to a GitHub repository (index.html must be at the repository root).
2. Create a new Node web service on a host that supports persistent WebSocket connections, using that repository.
3. Build command: npm install
4. Start command: npm start
5. After deployment, open the HTTPS website URL. Both players must use that same URL.

LOCAL TEST
Install Node.js 20+, open a terminal in this folder, run `npm install`, then `npm start` and open http://localhost:3000. This local URL is only for the same computer/network test; it is not the public online address.
