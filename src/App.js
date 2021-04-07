
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Modal from './components/modal'
import Header from './components/header'


function App() {
  return (


    <Container fluid className="text-center">
        <Header/>
      <Row>

        <Col xs="6">This is Column profile
        <Modal />
        </Col>
        
        <Col xs="6">This is Column
        
        </Col>

      </Row>
    </Container>

  );
}

export default App;
