import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props) {
    return(
    <div className="footer">
            <div className="row justify-content-center">             
                <div className="col-6 col-sm-2">
                    <h6>網站指南</h6>
                    <ul className="list-unstyled">
                    <li><Link to='/unit-converter'>主頁</Link></li>
                        <li><Link to='/unit-converter/bmi'>BMI計算器</Link></li>
                        <li><Link to='/unit-converter/weight'>重量</Link></li>

                    </ul>
                </div>
                <div className="col-6 col-sm-4 align-self-center">
                <h6>容積/面積</h6>
                    <ul className="list-unstyled">
                        <li><Link to='/unit-converter/length'>長度</Link></li>
                        <li><Link to='/unit-converter/area'>面積</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 <a href="https://zelinato.com">Zelina TO</a></p>
                </div>
            </div>
    </div>
    )
}

export default Footer;