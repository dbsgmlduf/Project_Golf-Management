import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="page-header">
            <Link to = {'/'}>
                <h1>GOLFTAK</h1>
            </Link>
            <div className="navbar_item">
                <li id="login">
                    <Link to = {'/login'}>SIGN IN</Link>
                </li>
                <li id="register">
                    <Link to = {'/register'}>SIGN UP</Link>
                </li>
            </div>
        </div>
    );
}

export default Header;
