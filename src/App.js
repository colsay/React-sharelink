import 'bootstrap/dist/css/bootstrap.min.css';
import faker from "faker"
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Modal from './components/modal'
import Header from './components/header'
import Profile from './components/Profile'
import ReactLinks from './components/ReactLinks'
import { loadLinkThunk } from './redux/links/actions';

function App() {

  // function useStickyState(defaultValue, key) {
  //   const [value, setValue] = useState(() => {
  //     const stickyValue = window.localStorage.getItem(key);
  //     return stickyValue !== null
  //       ? JSON.parse(stickyValue)
  //       : defaultValue;
  //   });

  //   useEffect(() => {
  //     window.localStorage.setItem(key, JSON.stringify(value));
  //   }, [key, value]);
  //   return [value, setValue];
  // }

  // useEffect(() => {
  //   loadLinkThunk()
  //     .then(items => {
  //       console.log(items)
  //     })
  // }, [])


  // const [item, setItem] = useStickyState([], "data")

  // const addItem = (obj) => {
  //   setItem([...item, obj])
  // }

  // const handleRemove = (id) => {
  //   const newList = item.filter((item) => item.id !== id);
  //   setItem(newList);
  // }

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
