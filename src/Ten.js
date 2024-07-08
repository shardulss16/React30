// Login Registration form

import React, { useState } from 'react'

export default function Ten() {

    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [isRegistered, setisRegistered] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUser] = useState([])

    const handleAuthentication = () => {
        if(isRegistered){
            //Login
            if(isRegistered){
                const user = users.find((u) => u.email === email && u.password === password);
                if(user){
                    setIsLoggedIn(true);
                }else{
                    alert('Login failed')
                }
            }
        }
        else{
            //Register
            const newUser = {email, password};
            setUser([...users,newUser]);
            localStorage.setItem('users',JSON.stringify(...users,newUser));
            setIsLoggedIn(true);
        }
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

      return (
        <div>
            {
               isLoggedIn ? (
                <div>
                    <h2>Welcome, {email}! </h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
               ) :(
                <div>
                    <h2>{isRegistered ? 'Login': 'Register'}</h2>
                          <form action="">
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder='password'onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleAuthentication}>
                {isRegistered ? 'Login' : 'Register'}
            </button>

        </form>
        <p>
            {isRegistered ? "Dont have a Account? Register Now" : "Alredy have an account , Log in" }
        </p>
        <button onClick={() => setisRegistered(!isRegistered)}>
            {isRegistered ?'Register': 'Login'}
        </button>
    </div>
  )

 }</div>

               )
    
      
}
