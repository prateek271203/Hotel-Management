import React, { useEffect, useState } from 'react';
import './login.css';

const Login = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [location, setLocation] = useState(null);
   const [credentials, setCredentials] = useState({
      username: undefined,
      email: undefined,
      city: undefined,
      country: undefined,
      phone: undefined,
      password: undefined,
      Profession: "user"
   });

   const handleChange = (e) => {
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick1 = (e) => {
      e.preventDefault();
      // register(dispatch, credentials)
   };

   const handleClick = (e) => {
      e.preventDefault();
   };

   const [containerClass, setContainerClass] = useState('');

   const handleRegisterClick = () => {
      setContainerClass('active');
   };

   const handleLoginClick = () => {
      setContainerClass('close');
   };

   useEffect(() => {
      if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
            position => {
               setLocation({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
               });
            },
            error => {
               console.log(error);
            }
         );
      } else {
         console.log("Geolocation is not supported by this browser.");
      }
   }, []);

   return (
      <>
         <div id="LoginReg" className={containerClass}>
            <div className="Login">
               <div className="content">
                  <h1>Log In</h1>
                  <label className="inp" htmlFor="usernameInput">
                     <input placeholder="Enter your email" id="usernameInput" type="text" onChange={(e) => setUsername(e.target.value)} />
                     <span className="label">Email</span>
                     <span className="focus-bg"></span>
                  </label>
                  <label className="inp" htmlFor="passwordInput">
                     <input placeholder="Enter your password" id="passwordInput" type="password" onChange={(e) => setPassword(e.target.value)} />
                     <span className="label">Password</span>
                     <span className="focus-bg"></span>
                  </label>
                  <input className="LoginBtn" type="button" onClick={handleClick} value="Sign In" />
               </div>
            </div>

            <div className="page front">
               <div className="content">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="96"
                     height="96"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-user-plus"
                  >
                     <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                     <circle cx="8.5" cy="7" r="4" />
                     <line x1="20" y1="8" x2="20" y2="14" />
                     <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                  <h1>Hello, friend!</h1>
                  <p>Enter your personal details and start the journey with us</p>
                  <button type="button" id="register" onClick={handleRegisterClick}>
                     Register
                  </button>
               </div>
            </div>

            <div className="page back">
               <div className="content">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="96"
                     height="96"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-log-in"
                  >
                     <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                     <polyline points="10 17 15 12 10 7" />
                     <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                  <h1>Welcome Back!</h1>
                  <p>To stay connected with us, please log in with your personal info</p>
                  <button type="button" id="login" onClick={handleLoginClick}>
                     Log In
                  </button>
               </div>
            </div>

            <div className="Register">
               <div className="content">
                  <h1>Sign Up</h1>
                  <label className="inp" htmlFor="emailInput">
                     <input placeholder="Enter your email" id="emailInput" type="email" onChange={handleChange} />
                     <span className="label">Email</span>
                     <span className="focus-bg"></span>
                  </label>
                  <label className="inp" htmlFor="nameInput">
                     <input placeholder="Enter your name" id="nameInput" type="text" onChange={handleChange} />
                     <span className="label">Name</span>
                     <span className="focus-bg"></span>
                  </label>
                  <label className="inp" htmlFor="phoneInput">
                     <input placeholder="Enter your phone number" id="phoneInput" type="number" onChange={handleChange} />
                     <span className="label">Phone Number</span>
                     <span className="focus-bg"></span>
                  </label>
                  <label className="inp" htmlFor="passwordInput">
                     <input placeholder="Enter your password" id="passwordInput" type="password" onChange={handleChange} />
                     <span className="label">Password</span>
                     <span className="focus-bg"></span>
                  </label>
                  <input className="LoginBtn" type="button" onClick={handleClick1} value="Sign Up" />
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;
