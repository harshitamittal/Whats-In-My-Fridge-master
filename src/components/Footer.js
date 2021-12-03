import React, {Component} from 'react';
import "./Footer.css"


class Footer extends Component{

    render()
    {
        return(
            <div id="Footer"  style={{backgroundColor: "white"}}>
                <div className="container">
                    <div className="row mt-5 pt-5">
                    <div className="col-lg-12 text-center">
                        <p className="copyright-text">
                        Handcrafted by <b>Harshita Mittal, Ayushi Mittal, Khushi Singhai and Aparna Pandey.</b>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}

export default Footer