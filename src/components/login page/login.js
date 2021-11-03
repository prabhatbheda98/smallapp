import React, { useState } from 'react';
import "./login.css";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const Login = () => {
    const [user, setuser] = useState({
        email: "",
        password: "",
    })
    const history = useHistory()

    const handleChange = e => {
        const { name, value } = e.target
        setuser({
            ...user, [name]: value
        })
    }
    const responseSuccessGoogle =(response) =>{
        console.log(response);
        axios({
            method:"post",
            url:"http://localhost:2500/student/googlelogin",
            data:{tokenId:response.tokenId}
        }).then(response => {
            console.log(response)
        })
        
      }
      const responseErrorGoogle =(response) =>{
    
      }
    const Loginsubmit = () => {
        const { email, password } = user
        if (email && password) {
            axios.post("http://localhost:2500/student/login", user).then(res => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'user login sucessfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                // alert(res.data.message)
                localStorage.setItem("stuid", res.data.isStudent.id)
                history.push(`/userprofile`)
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'invalid input!',
                footer: '<a href="">Please enter the details!</a>'
            })
        }
    }
    const History = () => {
        history.push("/register");
    }

    return (
        <div className="login">
            <h1>login</h1>
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="enter the email" />

            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="enter the password" />
            <button type="button" className="btn btn-primary" onClick={Loginsubmit}>login</button>
            <div>or</div>
            <button type="button" className="btn btn-primary" onClick={History}>Register</button>
            <p className="forgot-password text-right">
                <Link to={'/forget'}>Forgot password?</Link>
            </p>
            <GoogleLogin
                clientId="1028097338125-17p7q25n9a8letb94ro8564hs2h24vdm.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseSuccessGoogle}
                onFailure={responseErrorGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login;
