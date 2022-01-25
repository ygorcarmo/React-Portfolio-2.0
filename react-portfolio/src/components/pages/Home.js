import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typical from 'react-typical';
import profile from '../../assets/images/profile.jpg';

export default function Home() {
  return (
    <div className='m-4 flex-grow-1'>
      <Container>
        <Row >
          <Col className='align-self-center alingtext-center'>
            <h1 className='primary-text'>
              Hello, I'm <span className='highlighted-text'>Ygor :)</span>
            </h1>
          </Col>
          <Col >
            <img className='rounded-circle' style={{ width: '500px', height:'500px'}}  src={profile} alt='profile picture' />
          </Col>
        </Row>
      </Container>
      <h2 className='text-center p-4'>
        <Typical loop={Infinity} 
        steps={["Why do Java programmers have to wear glasses? Because they don’t C#.",1000,
        "A SQL query goes into a bar, walks up to two tables, and asks, ‘Can I join you?’",1000,
        "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", 1000 ]} />
      </h2>
      <p className='p-4' style={{ fontSize: '25px'}} >I am passionate and dedicated about the IT industry.
         I chose IT as my profession as it offers endless possibilities that excite me.
          Whilst challenges arise I am driven by my growth mindset to overcome and resolve complications.
           I have worked on my professional development undertaking cloud computing courses.
            My commitment to life long learning and passion for the profession motivates me to grow professionally and personally.
      </p>
    </div>
  );
}
