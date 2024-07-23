import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import './index.css';
import authConfig from './authconfig/auth0-Config';

ReactDOM.render(
<Auth0Provider
  domain={authConfig.domain}
  clientId={authConfig.clientId}
  redirectUri={authConfig.redirectUri}
>
  <App />
</Auth0Provider>,
document.getElementById("root")
);