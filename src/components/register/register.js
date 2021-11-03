import React, { useState } from 'react';
import "./register.css";
import axios from "axios";
import Swal from 'sweetalert2'
import { useHistory } from 'react-router';

const Register = () => {

    const [user, setuser] = useState({
        fname: "",
        lname: "",
        age: "",
        email: "",
        password: "",
        reEnterPassword: "",

    })

    const history = useHistory();

    const handleChange = e => {
        const { name, value } = e.target
        setuser({
            ...user, [name]: value
        })
    }

    const Register = () => {
        const { fname, lname, age, email, password, reEnterPassword } = user
        if (fname && lname && age && email && (password === reEnterPassword)) {
            axios.post("http://localhost:2500/student/register", user)
                .then(res => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'user Register sucessfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    history.push("/login")

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
        history.push("/login")
    }

    return (
        <div className="Register">
            <h1>Register</h1>
            <input type="text" name="fname" value={user.fname} onChange={handleChange} placeholder="enter the fname" />
            <input type="text" name="lname" value={user.lname} onChange={handleChange} placeholder="enter the lname" />
            <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="enter the age" />
            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="enter the email" />
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="enter the password" />
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} placeholder="Re -enter the password" />
            <button type="button" className="btn btn-primary" onClick={Register}>Register</button>
            <div>or</div>
            <button type="button" className="btn btn-primary" onClick={History}>login</button>
        </div>
    )
}

export default Register;
