import React, {useState, useEffect} from 'react';

import axios from 'axios';

const LoginPage = () => {

    const [email, setUserEmail] = useState("");
    const [pw, setUserPw] = useState("");

    /*EventHandler*/
    const login = e => {

    };

    return(
        <div className="form_group_login">
            <h2>LOG IN</h2>
            <div className="form_each">
                <label>Email</label>
                <input type="text" placeholder="Email" className="input_value"
                 onChange={(e)=>{setUserEmail(e.target.value);}}/>
            </div>

            <div className="form_each">
                <label>Password</label>
                <input type="password" placeholder="Password" className="input_value"
                 onChange={(e)=>{setUserPw(e.target.value);}}/>
            </div>
            <div className="form_each">
                <button className="btn" onClick={login}>Log in</button>
            </div>
        </div>
    );
}

export default LoginPage;