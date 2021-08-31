import { Button } from "@material-ui/core";
import React from "react";
import logo from "../../assets/sss.jpg";
import { useLocalContext } from "../../context/context";
import "./style.css";
const Login = () => {
  const { login, loggedInUser } = useLocalContext();

  console.log(loggedInUser);
  return (
    <div className="login">
      {/* <img className="login__logo" src={logo} alt="Classroom" /> */}
  
<img className="login__logo" src={logo} alt="Classroom" />

      <Button variant="contained" color="default" onClick={() => login()}>
        Login/SignUp
      </Button>
    
    </div>
  );
};

export default Login;