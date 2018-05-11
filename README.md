**Currency Converter** is a simple web app that allows converting values and check how currencies has changed during the time.

## Initialization

Before the first use, clone this repository and install node dependencies:

```
yarn
``` 

or 

```
npm install
```

The next thing to do is to set up your [fixer.io](https://fixer.io/) API key (you can obtain it for free from the fixer's website). To do it, open the example file (`/src/config/api.key.example.js`) and change the below line properly:

```javascript
export const ACCESS_KEY = 'place your api key here!';
```

Once it's done, change the name of this file to `api.key.js`. Now you are ready to run the app!

## Running the app

To run the app, just call:

```
yarn start
```

or 

```
npm run start
```

in the system console.

This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser (should open automatically in your default browser).

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Other scripts

To build the app for productions you can call:

`yarn build` or `npm run build`

This will make all the necessary build steps and place the result in the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## App features and how to use it

The app has two features:

* converting currencies (home page)
* checking how currency have changed between selected dates (history subpage)

### Converting currencies

To convert the currency, on the home page: 

* select your currency (**unfortunately, for now you can only convert from EURO, which is the only allowed base currency accepted by the fixed.io API for free subscription plan**)
* type the amount of money you want to convert
* select the target currency
* push enter or click "Convert"

### Checking how currency have changed between dates

To check how the convert rate of two currencies have changed between two dates, open the `/history` subpage and:

* select your currency
* select target currency
* select starting date
* select finishing date
* push enter or lick "Check"

## Other information

* this project is based on ejected [create-react-app](https://github.com/facebook/create-react-app) starter kit.
* most important parts of it's technology stack:
    * [React](https://reactjs.org/)
    * [Redux](https://redux.js.org/)
    * [react-router](https://github.com/ReactTraining/react-router)
    * [react-observable](https://github.com/redux-observable/redux-observable) (rxjs)
    * [Sass](https://sass-lang.com/)
    * [webpack](https://webpack.js.org/)
    * [babel](https://babeljs.io/)
    * [localStorage](https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage) (to persist Redux state on page reload)
