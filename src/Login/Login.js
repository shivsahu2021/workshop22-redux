import React, { useState } from "react";
import {useDispatch} from "react-redux";
import { login } from "../Redux/userReducer";

function Login()
{

  const [loginUser, setUser] = useState({
    name:"",
    email: "",
    age:"",
    password: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...loginUser,[name]: value });
  };
  const dispatch= useDispatch();
  const handleSubmit = (e) => {
     e.preventDefault();

     dispatch(login({
       name:loginUser.name,
       email:loginUser.email,
       phone:loginUser.phone,
       password:loginUser.password,
       loggedIn:true,
      })
      );
  };
  return (
    <>
    

      <div style={{backgroundImage: "linear-gradient(silver , blue)" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <h2 style={{ color:"black"}} > ReactJS: Redux </h2>
        </div>
      
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>

          <input style={{ cursor: "pointer", width: "250px", height: "25px", border: "2px solid black", padding: "5px 0px 5px 20px", borderRadius:"20px 0px 20px 0px" }}
            type="text" value={loginUser.name} onChange={handleInput} placeholder="Enter Name" name="name" id="name"/>
          <br />
          <input style={{ cursor: "pointer", width: "250px", height: "25px", border: "2px solid black", padding: "5px 0px 5px 20px", borderRadius:"20px 0px 20px 0px" }}
            type="email" value={loginUser.email} onChange={handleInput} placeholder="Enter Email" name="email" id="email"/>
          <br/>

          <input style={{ cursor: "pointer", width: "250px", height: "25px", border: "2px solid black", padding: "5px 0px 5px 20px",borderRadius:"20px 0px 20px 0px" }}
            type="phone" value={loginUser.phone} onChange={handleInput} placeholder="Enter Age" name="phone" id="phone"/>
          <br/>

          <input style={{ cursor: "pointer", width: "250px", height: "25px", border: "2px solid black", padding: "5px 0px 5px 20px",borderRadius:"20px 0px 20px 0px" }}
            type="password" value={loginUser.password} onChange={handleInput} placeholder="Enter Password" name="password" id="password"/>
            <button onClick={(e) => handleSubmit(e)} style={{ marginTop: "20px", cursor: "pointer", width: "200px", height: "35px", border: "2px solid red", borderRadius: "20px 0px 20px 0px"}}>Login</button>
        </div>
      </div>

    
    </>
  );
  
}



export default Login;