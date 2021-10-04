import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../../_actions/user_actions'


const RegisterPage = (props) => {

    const dispatch = useDispatch();
    const [Usertype, setUserTypeReg] = useState("");
    const [Name, setUserNameReg] = useState("");
    const [Email, setUserEmailReg] = useState("");
    const [Password, setUserPwReg] = useState("");
    const [ConfirmPassword, setUserConfirmPWReg] = useState("");

    /*Event Handler*/
    const usertypeHandler = (e)=>{
        setUserTypeReg(e.currentTarget.value);
    }
    const nameHandler = (e)=>{
        setUserNameReg(e.currentTarget.value);
    }
    const emailHandler = (e)=>{
        setUserEmailReg(e.currentTarget.value);
    }
    const passwordHandler = (e)=>{
        setUserPwReg(e.currentTarget.value);
    }
    const confirmPWHandler = (e)=>{
        setUserConfirmPWReg(e.currentTarget.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault()

        const data = {
            usertype : Usertype,
            name : Name,
            email : Email,
            password : Password,
        }
        if(Password === ConfirmPassword){
            dispatch(register(data)).then(res=>{
                console.log(res);
                alert("가입이 정상적으로 완료되었습니다");
                props.history.push("/login");
            })
        }else{
            alert("비밀번호가 일치하지 않습니다.")
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <h2>SIGN UP</h2>
            <div className="form_each">
                User Type
                <select name="userType" onClick={usertypeHandler}>
                    <option value="none">=선택=</option>
                    <option value="learner">learner</option>
                    <option value="lecture">lecture</option>
                </select> 
            </div>
            <div className="form_each">
                <label>Name</label>
                <input type="text" placeholder="Name" className="input_value"
                 onChange={nameHandler}/>
            </div>
            <div className="form_each">
                <label>Email</label>
                <input type="text" placeholder="Email" className="input_value"
                 onChange={emailHandler}/>
            </div>
            <div className="form_each">
                <label>Password</label>
                <input type="password" placeholder="Password" className="input_value"
                 onChange={passwordHandler}/>
            </div>
            <div className="form_each">
                <label>Password</label>
                <input type="password" placeholder="Password" className="input_value"
                 onChange={confirmPWHandler}/>
            </div>
            <div className="form_each">
                <button className="btn">Sign</button>
            </div>
        </form>
    )
};

export default RegisterPage;