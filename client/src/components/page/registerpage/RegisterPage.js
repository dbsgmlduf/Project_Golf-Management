import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {register} from '../../../_actions/user_actions'


const RegisterPage = (props) => {

    const dispatch = useDispatch();
    const [usertype, setUserTypeReg] = useState("");
    const [email, setUserEmailReg] = useState("");
    const [id, setUserIdReg] = useState("");
    const [password, setUserPwReg] = useState("");
    const [confirmPassword, setUserConfirmPWReg] = useState("");
    const [nickname, setUserNicknameReg] = useState("");
    const [confirmauth, setUserConfirmAuthReg] = useState("");
    

    /*Event Handler*/
    const usertypeHandler = (e)=>{
        setUserTypeReg(e.currentTarget.value);
    }
    const emailHandler = (e)=>{
        setUserEmailReg(e.currentTarget.value);
    }
    const idHandler = (e)=>{
        setUserIdReg(e.currentTarget.value);
    }
    const passwordHandler = (e)=>{
        setUserPwReg(e.currentTarget.value);
    }
    const confirmPWHandler = (e)=>{
        setUserConfirmPWReg(e.currentTarget.value);
    }
    const nicknameHandler = (e)=>{
        setUserNicknameReg(e.currentTarget.value);
    }
    const confirmAuthHandler = (e)=>{
        setUserConfirmAuthReg(e.currentTarget.value);
    }
    const submitHandler = (e)=>{
        e.preventDefault()

        const data = {
            usertype : usertype,
            email : email,
            id : id,
            password : password,
            nickname : nickname,
            confirmauth : confirmauth,
        }
        if(password === confirmPassword){
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
                <label>Email</label>
                <input type="text" placeholder="Email" className="input_value"
                 onChange={emailHandler}/>
            </div>
            <div className="form_each">
                <label>Id</label>
                <input type="text" placeholder="Id" className="input_value"
                 onChange={idHandler}/>
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
                <label>nickname</label>
                <input type="text" placeholder="NickName" className="input_value"
                 onChange={nicknameHandler}/>
            </div>
            <div className="form_each">
                Certification
                <select name="auth" onClick={confirmAuthHandler}>
                    <option value="none">=선택=</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select> 
            </div>
            <div className="form_each">
                <button className="btn">Sign</button>
            </div>
        </form>
    )
};

export default RegisterPage;