import React, {useState} from 'react'
import axios from 'axios'
import "./Setpassword.css";
import {useParams} from 'react-router-dom'
import { useHistory } from 'react-router';
// import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
// import {isLength, isMatch} from '../../utils/validation/Validation'


const initialState = {
    password: '',
    cf_password: '',
    err: '',
    success: ''
}

function Setpassword() {
    const [data, setData] = useState(initialState)
    const {userId,token} = useParams()
    const history = useHistory();

    const {password, cf_password} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }


    const handleResetPass = async () => {
        // if(isLength(password))
        //     return setData({...data, err: "Password must be at least 6 characters.", success: ''})

        // if(!isMatch(password, cf_password))
        //     return setData({...data, err: "Password did not match.", success: ''})
        
        try {
            const res = await axios.post(`http://localhost:2500/student/resetpassword/${userId}/${token}`, {password})
            
            setData({...data, err: "", success: res.data.msg})
            history.push('/login');
            
        } catch (err) {
            err.response.data.msg && setData({...data, err: err.response.data.msg, success: ''})
        }
        
    }


    return (
        <div className="set_pass">
            <h1>Reset Your Password</h1>

            <div className="row">
                {/* {err && showErrMsg(err)}
                {success && showSuccessMsg(success)} */}

                <h4>Password</h4>
                <input type="password" name="password" id="password" value={password}
                onChange={handleChangeInput} />

                    <h4>Confirm Password</h4>
                <input type="password" name="cf_password" id="cf_password" value={cf_password}
                onChange={handleChangeInput} />         

                <button onClick={handleResetPass} className="btn btn-primary">Reset Password</button>
            </div>
        </div>
    )
}

export default Setpassword;