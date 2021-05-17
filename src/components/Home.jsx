import { Container, Row, Col } from "reactstrap";
import React from 'react';

function Home(props){
    return(
        <Container>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>單位轉換器</Col>
        </Row>
        <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>免費轉換不同單位，而且不會記錄你的數據</Col>
        </Row>
    </Container>
    );
}

export default Home;