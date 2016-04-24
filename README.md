# Chrome extension - Rest Client

 - HTTP Get, Post, Put and Delete requests to a particular URL.


## Technology Used:

* [Angular](https://angularjs.org/) - HTML enhanced for web apps!
* [Bower](http://bower.io/) - A package manager for the web app.
* [NPM](https://www.npmjs.com/) - npm is the package manager for JavaScript.
* [Bootstrap](http://getbootstrap.com/) - Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
* [jQuery](https://jquery.com/) - jQuery is a fast, small, and feature-rich JavaScript library.


## Installation

We need bower to be installed globally using npm:
```sh
$ npm install -g bower
```
Bower requires node, npm and git.

## Getting Started

### Install Bower Components
It installs the dependencies from bower.json into bower_components
```sh
$ bower install
```
### Load the extension
1. Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:![hotdogmenu.png](https://bitbucket.org/repo/aB7d9p/images/3010294220-hotdogmenu.png)and select Extensions under the Tools menu to get to the same place).

2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.

3. Click Load unpacked extension… to pop up a file-selection dialog.

4. Navigate to the directory in which your extension files live, and select it.


## Angular App with HTTP Requests

1. Enter the url after removing the default url.

2. Select the requets method form the given options.

3. Enter the parameters and add the paramters using Add Params button, if their is not paramters required then directly press the SEND button.

4. You will get the response in the given below Textarea.