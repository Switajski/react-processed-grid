# flexible-orders-react-gui



Built with  Webpack & React - Skeleton github.com/keathley/webpack-react-skeleton

Included things:

* React
* Webpack
* PostCSS
* CSS Modules
* React-Router
* Babel support
* Hot reloading and push state
* ESLint
* Mocha + Chai + Enzyme

## Getting started

To get the GUI started for development type following:

    $ npm install
    $ npm install react-datagrid --save
    $ webpack
    $ npm start

Running `npm start` will start webpack and the webpack hot reload server.

## Production Builds

If you want to deploy your assets then run this:

    $ npm run deploy

You'll now have a minified and hashed version of all of your assets.  By default vendor files and css are split out of the main bundle and cached separately.  If you add more vendor files and want them to be split out then make sure you add them to the vendor entrypoint.