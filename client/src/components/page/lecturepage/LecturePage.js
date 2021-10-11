import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
const LecturePage = (props) => {


    return(
        <div className="page-container">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default LecturePage;