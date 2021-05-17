import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>網站指南</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>主頁</Link></li>
                        {/* <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li> */}
                    </ul>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/zelinato"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon" href="mailto:slto@connect.ust.hk"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 Zelina TO</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;