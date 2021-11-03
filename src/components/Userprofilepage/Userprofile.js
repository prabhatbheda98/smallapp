import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import axios from 'axios';
import { Avatar } from 'antd';

export default function Userprofile(props) {

    const history = useHistory();
     
    const [Userprofile, setUserprofile] = useState({
        fname: "",
        lname: "",
        age: "",
        email: "",
    });
    const [updateItem,setupdateItem] =useState()
    const id = localStorage.getItem("stuid")

    useEffect(() => {
        axios.get(`http://localhost:2500/student/userprofile/${id}`)
            .then(res => setUserprofile({
                fname: res.data.fname,
                lname: res.data.lname,
                age: res.data.age,
                email: res.data.email,
            }))
    }, [])
    const editItem = event => {
        event.preventDefault();
        history.push(`/student/${Userprofile}/edit`);
      }

     const updateItem1 = Userprofile => {
        axios.put(`http://localhost:2500/student/${Userprofile.id}`, Userprofile)
          .then(res => {
            this.setState({student: res.data});
            history.push('/student');
          })
          .catch(err => console.log(err));
      }
    return (
        <div className="container">
            <div className="row table-responsive">

                <div>
                    <Avatar size={250} src="/images.png" /> 
                </div>

                <table className="table">
                    <thead>
                        <tr>    
                            <th>FIRSTNAME</th>
                            <th>LASTNAME</th>
                            <th>AGE</th>
                            <th>EMAIL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{Userprofile.fname}</td>
                            <td>{Userprofile.lname}</td>    
                            <td>{Userprofile.age}</td>
                            <td>{Userprofile.email}</td>
                             <td>
                             <button  onClick={editItem}>Edit item</button>
                                  {/* <button className="btn-success" onClick={() => { onEdit(id) }}>Edit</button> {' '} */}
                                    {/* <button className="btn-danger"onClick={() => { onDelete(index) }}>Delete</button> */}
                              </td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}