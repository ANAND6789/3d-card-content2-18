import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from './components/Crad';
import 'animate.css/animate.min.css'; // Import the minified version of animate.css
import './App.css';

const App = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <center>
            <h4 className='welcome animate__animated animate__flipInX animate__slower'>WELCOME TO STUDYLAB</h4>
            <h1 className='heading-1 animate__animated animate__flipInX animate__slower'>We Are StudyLab An Online Learning Center...</h1>
            <p className='para-1 animate__animated animate__flipInX animate__slower'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <p className='para-2 animate__animated animate__flipInX animate__slower'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <Card />
          </center>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
