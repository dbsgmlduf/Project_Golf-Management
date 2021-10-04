import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_actions/user_actions';

const LoginPage = (props) => {
    const dispatch = useDispatch();
    const [Email, setUserEmail] = useState("");
    const [Password, setUserPw] = useState("");

    /*EventHandler*/
    const onEmailHandler = (e)=>{
        setUserEmail(e.currentTarget.value);
    }
    const onPasswordHandler = (e)=>{
        setUserPw(e.currentTarget.value);
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log('Email',Email);
        console.log('Password',Password);

        let data = {
            email : Email,
            password : Password
        }

        dispatch(loginUser(data)).then(response =>{
            if(response.payload.loaginSuccess){
                props.history.push('/')
            }
            else{
                alert('실패')
            }
        })
    }
    
    return(
    <form onSubmit={onSubmitHandler}>
        <h2>LOG IN</h2>
        <div className="form_each">
            <label>Email</label>
            <input type="text" placeholder="Email" className="input_value"
            onChange={onEmailHandler}/>
        </div>
        <div className="form_each">
            <label>Password</label>
            <input type="password" placeholder="Password" className="input_value"
            onChange={onPasswordHandler}/>
        </div>
        <div className="form_each">
            <button className="btn">Log in</button>
        </div>
    </form>
    );
}

export default LoginPage;