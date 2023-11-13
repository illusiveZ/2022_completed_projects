import { Button } from "@material-ui/core";
import React from "react";
// import "./Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  //   return (
  //     <div className="login">
  //       <div className="login_container">
  //         <img
  //           src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  //           alt=""
  //         />
  //         <div className="login_text">
  //           <h1>Sign in to Whatsapp</h1>
  //         </div>
  //         <Button type="submit" onClick={signIn}>
  //           Sign in With Google
  //         </Button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Container>
      <LoginContainer>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt=""
        />
        <div>
          <h1>Sign In to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign in With Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;

const LoginContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px;
  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: #fff;
  }
`;
export default Login;
