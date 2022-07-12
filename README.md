# SocketWebView
The world's first Discord Android WebView that comes with JS execution support

## What is SocketWebView?
SocketWebView is a Cordova based WebView app that can load Discord while also having the ability to inject custom JavaScript code once the `onPageFinished` event is executed.

## Building

Prerequisites:
* Latest Node.JS
* Cordova CLI installed (`npm i -g cordova`)
* [Cordova's prereqisites](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#install-pre-requisites-for-building)
* Knowledge on JS

Setting up project:
* Clone the repository: `git clone https://github.com/DaBluLite/SocketWebView.git`
* Inside the project folder, run in a command line/terminal: `npm i`, followed by `cordova platform add android`, then by `cordova plugin add https://github.com/formulateco/cordova-plugin-injectview.git`
* set the content of `platforms>android>platform_www>cordova-plugin-injectview.json` and `platforms>android>app>src>main>assets>www>cordova-plugin-injectview.json` to `["www/cordova.js","www/cordova_plugins.js","www/inject.js"]`

Modifying the injection parameters:
* To modify the injected files, edit the file list in `platforms>android>platform_www>cordova-plugin-injectview.json` and `platforms>android>app>src>main>assets>www>cordova-plugin-injectview.json`
* To modify `inject.js`, edit `platforms>android>platform_www>inject.js`, `platforms>android>app>src>main>assets>www>inject.js` and `www>inject.js` (I haven't figured out the exact file the plugin uses as the main, so just to be sure)

Testing and building:
* Undocumented by me, for now. You should just follow the [instructions documented by the Cordova project](https://cordova.apache.org/docs/en/latest/guide/cli/index.html#build-the-app)
