import React ,{useState} from 'react'
import './registerpage.css'
export default function Registerpage() {
    const [user, setuser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterpassword: "",
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setuser({
            ...user,
            [name]:value
        })
    }
    return (
        <div className="register">
            <h1>Register</h1>
            <input type="text" placeholder='Your Name' name="name" value={user.name} onChange={handleChange}/>
            <input type="text" placeholder='Your Email' name="email" value={user.email} onChange={handleChange}/>
            <input type="password" placeholder='Your Password' name="password" value={user.password} onChange={handleChange}/>
            <input type="password" placeholder='Re-enter Password' name="reEnterpassword" value={user.reEnterpassword} onChange={handleChange}/>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}
