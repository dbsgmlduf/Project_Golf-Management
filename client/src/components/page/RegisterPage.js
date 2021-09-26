import React, {useState, useEffect} from 'react';

import axios from 'axios';

const RegisterPage = () => {

    const [usertype, setUserTypeReg] = useState("");
    const [name, setUserNameReg] = useState("");
    const [email, setUserEmailReg] = useState("");
    const [password, setUserPwReg] = useState("");

    /*Event Handler*/
    const register = e => {
        
    };

    return(
        <div className="form_group_register">
            <h2>SIGN UP</h2>
            <div className="form_each">
                User Type 
                <input type="radio" name="type" value="Learner"
                 onChange={(e) => {setUserTypeReg(e.target.value);}}/>
                <label htmlFor="Learner">Learner</label>
                <input type="radio" name="type" value="Lecturer"
                 onChange={(e) => {setUserTypeReg(e.target.value);}}/>
                <label htmlFor="Lecturer">Lecturer</label>
            </div>
            <div className="form_each">
                <label>Name</label>
                <input type="text" placeholder="Name" className="input_value"
                 onChange={(e) => {setUserNameReg(e.target.value);}}/>
            </div>
            <div className="form_each">
                <label>Email</label>
                <input type="text" placeholder="Email" className="input_value"
                 onChange={(e) => {setUserEmailReg(e.target.value);}}/>
            </div>
            <div className="form_each">
                <label>Password</label>
                <input type="password" placeholder="Password" className="input_value"
                 onChange={(e) => {setUserPwReg(e.target.value);}}/>
            </div>
            <div className="form_each">
                <button className="btn" onClick={register}>Sign</button>
            </div>
        </div>
    );
}

export default RegisterPage;