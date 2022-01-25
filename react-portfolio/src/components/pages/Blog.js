import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import CryptoWorld from '../../assets/images/CryptoWorld.gif';
import TimedQuiz from '../../assets/images/timed-quiz.png';
import Weather from '../../assets/images/weather.png';
import Mirage from '../../assets/images/mirage.png';
import WorkTimeTable from '../../assets/images/worksch.gif';

export default function Blog() {
  return (    
    <div className='m-4 bd-grid d-flex flex-wrap justify-content-center' >
      <Card className='m-2' style={{ width: '18rem'}}>   
        <Card.Img src={CryptoWorld} />     
        <Card.Body>
          <Card.Title>Crypto World</Card.Title>
          <Card.Text>
            On this website you can search about crypto and their historical data.
            <a href="https://github.com/Etta0311/Group-project-1" target='_blank' >Github repository</a> 
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button href='https://etta0311.github.io/CryptoWorld/' target='_blank'>Go to Website</Button>
        </Card.Body>
      </Card>

      <Card className='m-2' style={{ width: '18rem'}}>   
        <Card.Img src={TimedQuiz} />     
        <Card.Body>
          <Card.Title>Timed Quiz</Card.Title>
          <Card.Text>
            Test your maths knowledge with this quiz.
            <a href="https://github.com/ygorcarmo/timed-quiz" target='_blank' >Github repository</a> 
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button href='https://ygorcarmo.github.io/timed-quiz/' target='_blank'>Go to Website</Button>
        </Card.Body>
      </Card>

      <Card className='m-2' style={{ width: '18rem'}}>   
        <Card.Img src={Weather} />     
        <Card.Body>
          <Card.Title>Weather Forecast</Card.Title>
          <Card.Text>
            This is a weather forecast for the current and the next five days. 
            <a href="https://github.com/ygorcarmo/weather-forecast" target='_blank' >Github repository</a> 
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button href='https://ygorcarmo.github.io/weather-forecast/' target='_blank'>Go to Website</Button>
        </Card.Body>
      </Card>

      <Card className='m-2' style={{ width: '18rem'}}>   
        <Card.Img src={WorkTimeTable} />     
        <Card.Body>
          <Card.Title>Day Planner</Card.Title>
          <Card.Text>
          Just a simple day planner to keep everything organised. 
            <a href="https://github.com/ygorcarmo/work-schedule" target='_blank' >Github repository</a> 
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button href='https://ygorcarmo.github.io/work-schedule/' target='_blank'>Go to Website</Button>
        </Card.Body>
      </Card>

      <Card className='m-2' style={{ width: '18rem'}}>   
        <Card.Img src={Mirage} />     
        <Card.Body>
          <Card.Title>Mirage</Card.Title>
          <Card.Text>
            Mirage is used for sharing images with friends for comment
            <a href="https://github.com/TomSouthwick/Project-2" target='_blank' >Github repository</a> 
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Button href='https://polar-forest-94137.herokuapp.com/' target='_blank'>Go to Website</Button>
        </Card.Body>
      </Card>

    </div>
  );
}
