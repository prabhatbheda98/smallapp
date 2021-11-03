import React,{useState} from 'react';
import "./forget.css";
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Forget() {
    const [errMessage,setErrorMessage] = useState('');
    const [email,setEmail]=useState('');
    const history = useHistory();

    const onsubmitclicked = async ()=>{
        try {
            await axios.post(`http://localhost:2500/student/forgotpassword`, {email});

            setTimeout(() => {
                history.push('/login')
                
            }, 2000);
            
        } catch (error) {
            setErrorMessage(error.message);
        }
    }

    return (
        <>
        <div className="forget">
            
                <h1>Check your email for a reset link</h1>
          
                <h1>Forgot password</h1>
               <p>enter your email and will send you a reset link</p>
               {errMessage &&  <div className="fail">{errMessage}</div>}
               <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="aaa@gmail.com"/>
               <button disabled={!email} className="btn btn-primary" onClick={onsubmitclicked}>send Reset Link</button>
            </div>
            </>
    )
}
