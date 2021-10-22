import axios from 'axios';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { loginUser } from '../../_actions/user_actions';
import Header from '../layout/Header'

const LoginPage = (props) => {
    const dispatch = useDispatch();
    const [id, setUserId] = useState("");
    const [password, setUserPw] = useState("");
    
    /*EventHandler*/
    const onIdHandler = (e)=>{
        setUserId(e.currentTarget.value);
    }
    const onPasswordHandler = (e)=>{
        setUserPw(e.currentTarget.value);
    }
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        console.log('id', id);
        console.log('Password', password);

        let data = {
            id : id,
            password : password,
        }

        axios.interceptors.request.use((co) => {
            co.headers = {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            };
            co.timeout = 2000;
            return co;  
        })
        
        dispatch(loginUser(data)).then(response =>{
            if(response.payload.loginSuccess){
                localStorage.setItem('accessToken', response.payload.accessToken);
                const userTypeRes = response.payload.userType['usertype'];
                if(userTypeRes === 'lecturer'){
                    props.history.push('/lecturer')
                }else if(userTypeRes === 'learner'){
                    props.history.push('/learner')
                }
            }
            else{
                alert('실패')
            }
        })
    }
    
    return(
       
        <form onSubmit={onSubmitHandler} className="form_group_login">
            <Header/>
            <h2>LOG IN</h2>
            <div className="form_each">
                <label>ID</label>
                <input type="text" placeholder="ID" className="input_value"
                onChange={onIdHandler}/>
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