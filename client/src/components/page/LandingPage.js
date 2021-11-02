import Header from '../UI/modules/header/Header';
import Main from '../UI/modules/landingMain/Main';
import Footer from '../UI/modules/footer/Footer';
import BackVideo from '../UI/atoms/background_video';

const LandingPage = (props) => {

    localStorage.setItem("item", "hello world"); 
    return(
        <div className="page-container">
            <BackVideo/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default LandingPage;