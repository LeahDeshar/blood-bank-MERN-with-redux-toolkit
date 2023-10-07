import { userLogin, userRegister } from "../redux/Features/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
    e.preventDefault();
    try {
      if (!role || !email || !password) {
        return alert("Please Provide All Information");
      }
      store.dispatch(userLogin({email, password, role}))
      console.log("login", e, email, password, role);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const handleRegister = (
    e,
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalName,
    website
  ) => {
    e.preventDefault();
    try {
      store.dispatch(userRegister(
       { name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website}))
      console.log(
        "Register => ",
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website
      );
    } catch (error) {
      console.log(error);
    }
  };