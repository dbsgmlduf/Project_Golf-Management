import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="page-header">
            <Link to = {'/'}>
                <h1>GOLFTAK</h1>
            </Link>
            <div className="navbar_item">
                <li id="login">
                    <Link to = {'/logout'}>LOGOUT</Link>
                </li>
            </div>
        </div>
    );
}

export default Header;