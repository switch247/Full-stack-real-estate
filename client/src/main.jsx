import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

// const d =  process.env.REACT_APP_DOMAIN; 
// const c = process.env.REACT_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
    domain = "dev-z02ccb3xqm0xwakf.us.auth0.com"
    clientId = "vacZeXO12RUPWtp64TNLtKXTV248qx3t"
    authorizationParams={{
      // redirect_uri: "https://full-stack-real-estate-youtube-sooty.vercel.app"
      // redirect_uri: "http://localhost:5173"
      redirect_uri: window.location.origin
      
    }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
