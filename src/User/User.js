import React from "react";
import "./UserStyle.css";

const User = ({ user }) => {
  return (
    <div className="container">
  <div className="card">
   
    <div >
      <h2>{user.name}</h2>
      <h4 style={{marginTop:"2px",color:"blue",fontSize:"20px"}}>{user.username}</h4>
      <div style={{marginTop:"-2px"}} >
        <h3>E-mail:</h3>
        <span>{user.email}</span>
      </div>
      <div style={{marginLeft:"2px"}}>
        <h3>Phone :</h3>
        <span style={{color:"darkred",fontSize:"20px"}}>{user.phone.split('-').join('.')}</span>
        
        
      </div > 
      <a href="#Contact">Contact</a>
    </div>
  </div>
</div>
  );
};

export default User;