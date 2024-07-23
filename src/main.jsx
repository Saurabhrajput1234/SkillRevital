import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import './index.css';
import authConfig from './authconfig/auth0-Config';

const root = ReactDOM.createRoot(document.getElementById("root")); // Updated line

root.render(
  <Auth0Provider
    domain={authConfig.domain}
    clientId={authConfig.clientId}
    redirectUri={authConfig.redirectUri}
  >
    <App />
  </Auth0Provider>
);
