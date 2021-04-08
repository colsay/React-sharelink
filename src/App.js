
import 'bootstrap/dist/css/bootstrap.min.css';
import faker from "faker"
import { Component, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Modal from './components/modal'
import Header from './components/header'
import Profile from './components/Profile'
import ReactLinks from './components/ReactLinks'

function App() {

  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [item, setItem] = useStickyState([], "data")

  const addItem = (obj) => {
    setItem([...item, obj])
  }

  const handleRemove = (id) => {
    console.log(id)

    const newList = item.filter((item) => item.id !== id);
    setItem(newList);
  }

  // const numberLinks = () => {
  //   console.log(item.length)
  //   return item.length

  // }
  // numberLinks();


  return (

    <Container fluid className="text-center">
      <Header />
      <Row>
        <Col xs="6">Profile
          <Profile name="Oscar Chan" image={faker.image.avatar()} number={item.length} />
          <Modal addItem={addItem} />
        </Col>
        <Col xs="6">Favourite Links
        <ReactLinks item={item} remove={handleRemove} />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
