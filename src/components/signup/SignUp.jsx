import { useState } from "react";
import instaLogin from "../../assets/instaLogin.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Alert, Button, TextField } from "@mui/material";
import styles from "./SignUp.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { usersSlice } from "../../store/Store";
const SignUp = () => {
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameExists, setusernameExists] = useState("");
  const [useremailExists, setuseremailExists] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [success, setsuccess] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function usernamecheck() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let check = users.find((user) => user.username === username);
    if (check) {
      setusernameExists(
        "Username already taken. Please choose a different username."
      );
      return true;
    }
  }
  function useremailcheck() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let check = users.find((user) => user.email === email);
    if (check) {
      setuseremailExists(
        "Email already exists. Please choose a different email"
      );
      // console.log("email err");
      return true;
    }
  }
  function handleSignUp() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fullNameRegex = /^.{2,}$/;
    const usernameRegex = /^.{4,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    setEmailError("");
    setFullNameError("");
    setUsernameError("");
    setPasswordError("");
    setuseremailExists("");
    setusernameExists("");
    if (!emailRegex.test(email)) {
      setEmailError("Invalid Email Address");
      // return;
    }
    if (!fullNameRegex.test(fullname)) {
      setFullNameError("FullName must have atleast 2 characters");

      // return;
    }
    if (!usernameRegex.test(username)) {
      setUsernameError("Username must have at least 4 characters");
      // return;
    }
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must have at least 8 characters, one uppercase letter, one lowercase letter, and one digit"
      );
    }
  }

  function handlesubmit(e) {
    e.preventDefault();
    if (!email || !fullname || !username || !password) {
      return;
    }
    if (emailError || fullNameError || usernameError || passwordError) {
      return;
    }
    if (useremailcheck()) {
      return;
    }
    if (usernamecheck()) {
      return;
    }
    let newObj = {
      email: email,
      fullName: fullname,
      username: username,
      password: password,
    };
    dispatch(usersSlice.actions.addUser(newObj));
    setsuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }
  return (
    <div className={styles.signupContainer}>
      {emailError && (
        <Alert variant="filled" severity="error">
          Please fill out all the required fields to complete your registration!
        </Alert>
      )}
      {usernameExists && (
        <Alert variant="filled" severity="error">
          Username already taken. Please choose a different username.
        </Alert>
      )}
      {useremailExists && (
        <Alert variant="filled" severity="error">
          Email already exists. Please choose a different email
        </Alert>
      )}
      {success && (
        <Alert severity="success" color="success">
          User Registration Successfull!
        </Alert>
      )}
      <div className={styles.signupMain}>
        <img src={instaLogin} style={{ width: "174px", height: "50px" }} />

        <Button
          variant="contained"
          sx={{
            width: "280px",
            borderRadius: "10px",
            marginTop: "12px",
            backgroundColor: "#4497ed",
            textTransform: "none",
          }}
        >
          <FacebookOutlinedIcon /> Log in with Facebook
        </Button>
        <p>OR</p>
        <form onSubmit={handlesubmit}>
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            sx={{ width: "280px", marginTop: "10px" }}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            error={emailError !== ""}
            helperText={emailError}
          />

          <TextField
            id="filled-basic"
            label="FullName"
            variant="filled"
            sx={{ width: "280px", marginTop: "10px" }}
            onChange={(e) => {
              setfullname(e.target.value);
            }}
            error={!!fullNameError}
            helperText={fullNameError}
          />
          {/* <h1>hiii</h1> */}
          <TextField
            id="filled-basic"
            label="Username"
            variant="filled"
            onChange={(e) => {
              setusername(e.target.value);
            }}
            error={!!usernameError}
            helperText={usernameError}
            sx={{ width: "280px", marginTop: "10px" }}
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            error={!!passwordError}
            helperText={passwordError}
            sx={{ width: "280px", marginTop: "10px" }}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "280px",
              borderRadius: "10px",
              marginTop: "10px",
              backgroundColor: "#4497ed",
              textTransform: "none",
            }}
            onClick={handleSignUp}
          >
            Sign up
          </Button>
        </form>

        <p>
          People who use your service may have uploaded your contact information
          to instagram.Learn More
        </p>
        <p>
          By signing you agree to our terms,privacy policy and cookies policy
        </p>
      </div>
      <div className={styles.signupBox}>
        <p>
          Have an account?
          <span>
            <Link to="/">Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
