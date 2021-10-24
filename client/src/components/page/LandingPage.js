import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/landingMain/Main';
import Footer from '../UI/modules/footer/Footer';

const LandingPage = (props) => {


    return(
        <div className="page-container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default LandingPage;