# Push Notification App
Benachrichtigungen

## Starten

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Dependencies

Web server:

```
$ cd ~/PWAPUSH
$ npm install -g serve
$ serve
```

### Backend

```
$ cd ~/PUSHSERVER
$ npm install express
$ npm install body-parser
$ npm install fcm-node
$ node SubscriptionIDServer.js
```
Folgendes sollte zu sehen sein:

```
Rest Service Listening on port 8080
```

## Benachrichtigung senden: Neues Kommandozeilenfenster (curl-Befehl nur auf Linux/MacOS kann aber auf WS installiert werden.)

```
$ curl -v http://localhost:8080/push
```

Anleitung: (https://www.codemag.com/Article/1901031/Implementing-Push-Notifications-in-Progressive-Web-Apps-PWAs-Using-Firebase)

## Authors

Yannis Anderegg @ TF Bern
