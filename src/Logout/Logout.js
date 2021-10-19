import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../Redux/userReducer';

function Logout()
{
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
   const  handleLogout=(e)=>{
        e.preventDefault();
       
        
        dispatch(logout());
    }
    return (
        <div style={{ width: "100%", height: "100%", backgroundImage: "linear-gradient(silver , blue)" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}><h2 style={{ color:"black"}} > ReactJS: Redux </h2></div>

            <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <div style={{ backgroundColor:"white", width:"700px", height:"300px", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", border:"3px solid black", borderRadius:"30px 0px 30px 0px"}}>

                    <h1 style={{ color:"black"}} > Name : {user.name}</h1>
                    <h3 style={{ color:"black"}} > Email : {user.email }</h3>
                    <h3 style={{ color:"black"}} > Age : {user.phone }</h3>
                </div>
                    <button  style={{ marginTop:"30px", cursor:"pointer", width: "250px",height: "35px",  border: "2px solid red", borderRadius:"20px 0px 20px 0px" }} onClick={(e)=>handleLogout(e)}>Logout</button>

            </div>
        </div>


        
    )

}

export default Logout;