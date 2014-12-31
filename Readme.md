# Demo App

This is a demo application intended to display the [GitHub Gists API](https://developer.github.com/v3/gists/).

The application is built with Ext JS 5.0.1, and scaffolded using Sencha Cmd (5.1.0.26). As such there is a fair amount
of boilerplate code left over from the original project auto-generation.

## GitHub API

In accordance with the best practices and generally accepted architecture of the Sencha ecosystem, third-party "library"
code will exist as a package under `~/packages/`. Looking in that folder, you will see a `GitHub` package (again whose 
general architecture was auto-scaffolded by Sencha Cmd).

The meat of this demo lives under `~/packages/GitHub/src/` where you'll find the following three files:

  * API.js
  * model/Gist.js
  * store/Gist.js
  
The general idea here is that (per the Sencha convention) data is consumed using the "Model" and "Store" data structures.
Therefore our `GitHub` package will ship with a pre-defined "Model" and "Store" that any Sencha developer could simply
plug into their applications without having to write additional code.

The `GitHub.API` class is a singleton utility class enabled developers to quickly format API requests using `url()` 
or call the APIs directly using `request()`.

This demo application has only implemented two of the available APIs, though its architecture allows it to easily scale:

 * GET /users/:username/gists
 * GET /gists/:id
 
## Running the Application

Again, per the Sencha convention, this application requires that it be loaded on a web server.

Viewing the `~/index.html` file will then automatically load the single page Ext JS application. 