import 'bootstrap/dist/css/bootstrap.min.css';
import faker from "faker"
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Modal from './components/modal'
import Header from './components/header'
import Profile from './components/Profile'
import ReactLinks from './components/ReactLinks'
import { loadLinkThunk } from './redux/links/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLinkThunk());
  }, [])

  return (
    <Container fluid className="text-center">
      <Header />
      <Row>
        <Col xs="6">
          <h3>Profile</h3>
          <Profile name="Oscar Chan" image={faker.image.avatar()} number />
          <Modal />
        </Col>
        <Col xs="6">
          <h3>Favourite Links</h3>
          <ReactLinks />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
