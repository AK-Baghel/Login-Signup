import React ,{useState} from 'react'
import './loginpage.css'
export default function Loginpage() {
  const [user, setuser] = useState({
    email: "",
    password: "",
})
const handleChange=(e)=>{
    const {name,value}=e.target;
    setuser({
        ...user,
        [name]:value
    })
}
  return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder='Enter Your Email' name="email" value={user.email} onChange={handleChange}/>
        <input type="password" placeholder='Enter Your Password' name="password" value={user.password} onChange={handleChange}/>
        <div className="button">Login</div>
        <div>or</div>
        <div className="button">Register</div>
    </div>
  )
}
