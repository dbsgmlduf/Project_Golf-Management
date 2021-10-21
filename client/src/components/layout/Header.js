import React from 'react';
import LoginButton from '../UI/atoms/login_button/index';
import LogoutButton from '../UI/atoms/logout_button/index';
import RegisterButton from '../UI/atoms/register_button/index';
import isLogin from '../../lib/isLogin';


const Header = () => {
    if(isLogin()){
        return(
            <div className="page-header">
                <h1>GOLFTAK</h1>
                <div className="navbar_item">
                    <LogoutButton/>
                </div>
            </div>
            )
    }
    else{
        return(
            <div className="page-header">
                <h1>GOLFTAK</h1>
                <div className="navbar_item">
                    <LoginButton/><RegisterButton/>
                </div>
            </div>
    );
}
};
export default Header;
