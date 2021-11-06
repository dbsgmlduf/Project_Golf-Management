import Header from '../UI/modules/header/Header';
import Footer from '../UI/modules/footer/Footer';
import BackVideo from '../UI/atoms/background_video';

const LandingPage = (props) => {

    return(
        <div className="page-container">
            <BackVideo/>
            <Header/>
            <Footer/>
        </div>
    );
}

export default LandingPage;