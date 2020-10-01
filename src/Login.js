import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import { actionTypes } from "./Reducer";
import "./Login.css";
import { useStateValue } from "./StateProvider";

export default function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"
          alt=""
        />
        <div className="login__text">
          <h1>login To whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}
