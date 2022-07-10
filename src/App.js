import UAuth from "@uauth/js";
import React, { useEffect, useState } from "react";
import { HomePage } from "./Components/HomePage";
import { LandingPage } from "./Components/LandingPage";

const uauth = new UAuth({
  clientID: "58f1804f-8131-4090-a648-a44139c16587",
  redirectUri: "http://localhost:3000/login",
  scope: "openid wallet",
});

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  // Check to see if the user is inside the cache
  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  // Login with a popup and save the user
  const handleLogin = () => {
    setLoading(true);
    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  // Logout and delete user
  const handleLogout = () => {
    setLoading(true);
    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  if (loading) {
    return(
      <HomePage login={handleLogin}/>
    );
  }

  if (error) {
    console.error(error);
    return <>{String(error.stack)}</>;
  }

  if (user) {
    return (
      <>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <button onClick={handleLogout}>Logout</button>
        <LandingPage logout={handleLogout}/>
      </>
    );
  }

  return (
    <HomePage login={handleLogin}/>
  );
};

export default App;
