import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Register } from "../../Services/api";
import { useNavigate } from "react-router-dom";
import "../../App.css";

export default function SignUpPage() {
  let navigate = useNavigate();
  const [ismessage, setIsmessage] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
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
    const res = await Register(inputValues);
    console.log(res.status);
    if (res.status === 201) {
      navigate("/home");
    } else {
      setIsmessage(true);
    }
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Join us</h2>
      <h5>Create your personal account</h5>
      {/* action="/home" */}
      <form onSubmit={handleSubmit}>
        <p>
          <label>Username</label>
          <br />
          <input onChange={handleOnChange} type="text" name="name" required />
        </p>
        <p>
          <label>Email address</label>
          <br />
          <input onChange={handleOnChange} type="email" name="email" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            onChange={handleOnChange}
            type="password"
            name="password"
            required
          />
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
        {ismessage && (
          <>
            <p style={{ color: "red" }}>Already account on this email!</p>
          </>
        )}
      </form>
      <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
}
