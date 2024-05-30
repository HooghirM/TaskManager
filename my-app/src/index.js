//index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Auth0Provider
		domain='dev-mf6lqfng.us.auth0.com'
		clientId='5c1HQIOd6HlVEi2CLLfTPO7HCImJ9qZr'
		redirectUri={window.location.origin}>
		<App />
	</Auth0Provider>
);
reportWebVitals(console.log);
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// // eslint-disable-next-line
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// function HelloWorld() {
//   return <h1 className="greeting">Hello, World!</h1>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HelloWorld />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
