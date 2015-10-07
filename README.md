:octocat:
# jajaja

WTF? Is a web server that listens to a web socket and laughs on the server when an event is received.

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
Run the `index.html` file (make sure your server address is correct)
 
 or
 
Create a client of yout own that uses web sockets to send a `'jajaja'` event


### Hassle free installation
1. Open a terminal & cd into the folder you want the server
2. Run:
`curl -#L https://github.com/UnJavaScripter/jajaja/tarball/master | tar -xzv && cd UnJavaScripter-jajaja-* && npm install && node app.js`
