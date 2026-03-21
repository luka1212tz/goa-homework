import React, { useState } from "react";

function Input() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  function emailfunc(e) {
    setEmail(e.target.value);
  }


  function passwordfunc(e) {
    setPassword(e.target.value);
  }

  return (
    <>
      
       
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, recusandae.
        </p>

        <form>
         
        <input type="text"onChange={emailfunc}  value={email} />

        <input type="text"onChange={passwordfunc}  value={password} />
        
        
        </form>
      

      
        
        <p>{email}</p>
        <p>{password}</p>
      
    </>
  )
}

export default Input;