import React, { useState } from "react";
import {
  Alert,
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import instaLogin from "../../assets/instaLogin.png";
import styles from "./Login.module.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [name, setname] = useState("");
  const [success, setsuccess] = useState(false);
  // const [emailError, setEmailError] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const footerButtons = [
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Locations",
    "InstagramLite",
    "Hashtags",
    "Locations",
  ];

  const users = useSelector((state) => {
    return state.users;
  });

  function handleLogin() {
    let registeredUser = users.find(
      (user) => user.username === name || user.email === name
    );
    console.log(registeredUser);
    if (registeredUser) {
      if (password === registeredUser.password) {
        // alert("Login Successful");
        let loggeduser = {
          username: registeredUser.username,
          fullname: registeredUser.fullName,
        };
        localStorage.setItem("loggedUser", JSON.stringify(loggeduser));
        setsuccess(true);
        setTimeout(() => {
          navigate("/userpage");
        }, 1500);
      } else {
        alert("Password mismatch");
      }
    } else {
      alert("User not found");
    }
  }

  return (
    <div className={styles.loginContainer}>
      {success && (
        <Alert severity="success" color="success">
          Login Successfull!
        </Alert>
      )}
      <div className={styles.loginMain}>
        <img src={instaLogin} style={{ width: "174px", height: "50px" }} />

        <TextField
          id="filled-basic"
          label="Username or Email"
          variant="filled"
          sx={{ width: "280px", marginTop: "20px" }}
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <FormControl sx={{ m: 1, width: "280px" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </FormControl>

        <Button
          variant="contained"
          sx={{
            width: "280px",
            backgroundColor: "rgb(0, 115, 255)",
            textTransform: "none",
          }}
          onClick={handleLogin}
        >
          Log in
        </Button>
        <p>OR</p>
        <h4>
          <FacebookIcon sx={{ color: "#2f54bd" }} /> Login with facebook
        </h4>
        <p>Forget Password?</p>
      </div>
      <div className={styles.loginBox}>
        <p>
          Don't have an account?{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
        </p>
      </div>
      <footer>
        {footerButtons.map((btn, index) => (
          <>
            <li key={index}>{btn}</li>
          </>
        ))}
      </footer>
    </div>
  );
};

export default Login;
