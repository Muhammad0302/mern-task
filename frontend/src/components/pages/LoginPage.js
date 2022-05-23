import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function SignInPage() {
  let navigate = useNavigate();
  const [ismessage, setIsmessage] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
    // console.log(inputValues);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Login(inputValues);
    console.log(res);
    if (res.status === 200) {
      navigate("/home");
    } else {
      setIsmessage(true);
    }
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to us</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Email address</label>
          <br />
          <input onChange={handleOnChange} type="text" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
          <input
            onChange={handleOnChange}
            type="password"
            name="password"
            required
          />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
        {ismessage && (
          <>
            <p style={{ color: "red" }}>Invalid email or password!</p>
          </>
        )}
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
