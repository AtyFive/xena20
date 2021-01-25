import React from "react";
import { Router } from "@reach/router";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ProfilePage from "./ProfilePage";
import { useUserContext } from "../providers/UserProvider";
import PasswordReset from "./PasswordReset";

function Application() {
  const { user } = useUserContext();
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignUp path="signUp" />
          <SignIn path="/" />
          <PasswordReset path = "passwordReset" />
        </Router>
      
  );
}

export default Application;
