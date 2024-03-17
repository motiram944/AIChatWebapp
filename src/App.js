import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./Page/Home";

function App() {
  return (
    <div className="overflow-hidden">
      <Auth0Provider
        domain="dev-uua7m5y7r1iwqmdd.uk.auth0.com"
        clientId="DFlzYYbQPwBnXWahffLVfsbfqazrbBMT"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Home />
      </Auth0Provider>
    </div>
  );
}

export default App;
