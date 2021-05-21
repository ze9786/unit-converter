import { Container, Row, Col } from "reactstrap";
import React from 'react';
import GoogleAd from "./GoogleAd";

function Home(props){
    return(
        <Container>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>單位轉換器</Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>免費轉換不同單位，而且不會記錄你的數據</Col>
        </Row>
        <GoogleAd slot="4171143055" timeout={1000} classNames="page-bottom" />
        </Container>
    );
}

export default Home;