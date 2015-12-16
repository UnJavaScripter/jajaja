:octocat:
# jajaja

WTF?
It ss a web server that listens to an http request (http://localhost:1337/lol by default) or web socket event and laughs on the server when an event is received.

### Requirements
- nodejs

**ALSA stuff**

The [`speaker`](https://www.npmjs.com/package/speaker) package requires:

`sudo apt-get install libasound2-dev`

### Installation
`npm install`

### Starting the server
`node app.js`

### Client side
Run the `index.html` file
 
 or
 
Create a client of yout own that uses web sockets to send a `'jajaja'` event to ws://localhost:1337


### Hassle free installation
1. Open a terminal & cd into the folder you want the server
2. Run:
`curl -#L https://github.com/UnJavaScripter/jajaja/tarball/master | tar -xzv && cd UnJavaScripter-jajaja-* && npm install && node app.js`
