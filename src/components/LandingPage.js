import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'


class LandingPage extends Component{

    render()
    {
        return(
            <div className = "LandingPage">
                <Header />
                <MainContent />
                <Footer />
            </div>
        )
    }

}

export default LandingPage