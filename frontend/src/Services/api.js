import axios from "axios";

const url = "http://localhost:5000/api";

//Deploy version of Heroku base url for API
// const url = 'https://dhobigaatbackend.herokuapp.com';

// Register User in the Db
export const Register = async (data) => {
  try {
    return await axios.post(`${url}/users/register`, data);
  } catch (error) {
    return error;
  }
};
// login User in the Db
export const Login = async (data) => {
  try {
    return await axios.post(`${url}/users/login`, data);
  } catch (error) {
    return error;
  }
};
