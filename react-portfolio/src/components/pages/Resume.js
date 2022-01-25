import React from 'react';
import { FaJs, FaNode, FaReact, FaHtml5, FaDatabase, FaAmazon } from "react-icons/fa"
import { DiNetmagazine } from "react-icons/di";
import { Card, ListGroupItem } from 'react-bootstrap';
export default function Resume() {
  return (
    <div>
      <h1 className='text-center m-2'>Skills</h1>
      <div className='container d-flex flex-wrap'>
        <div className='row'>
          <div className='m-2 col border border-primary rounded p-2' >
            <FaJs style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>Javascript</span>
          </div>
          <div className='m-2 col border border-primary rounded p-2' >
            <FaNode style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>NodeJs</span>
          </div>
          <div className='m-2 col border border-primary rounded p-2' >
            <FaReact style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>React</span>
          </div>
          <div className='m-2 col border border-primary rounded p-2' >
            <FaDatabase style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>SQL</span>
          </div>
          <div className='m-2 col border border-primary rounded p-2' >
            <FaDatabase style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>NoSQL</span>
          </div>
          <div className='m-2 col border border-primary rounded p-2' >
            <FaHtml5 style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>HTML</span>
          </div>
          <div className='m-2 col border border-primary rounded p-2' >
            <DiNetmagazine style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>DotNet</span>
          </div>
          <div className='m-2 col border border-primary rounded p-2' >
            <FaAmazon style={{ width: '50px', height:'50px' }} />
            <span className='m-2'>AWS</span>
          </div>          
        </div>
      </div>
        <h1 className='text-center m-2'>Experience</h1>
      <div className='d-flex flex-wrap justify-content-center'>
        <Card style={{ width: '50rem' }} className='m-4'>
          <Card.Body>
            <Card.Title className='m-2'>Weigh More Solutions</Card.Title>
            <Card.Subtitle className='m-2'> Nov/2021 - Present</Card.Subtitle>
            <Card.Text>
              <ListGroupItem>Maintaining and developing software using the Microsoft
              stack, Azure cloud platform and web technologies.</ListGroupItem>
              <ListGroupItem>
              Responding to and resolving technical support and change requests.
              </ListGroupItem>
              <ListGroupItem>
              Ensuring the availability and high performance of internal systems.
              </ListGroupItem>
              <ListGroupItem>
              Preparing and deploying updates and patches.
              </ListGroupItem>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '50rem' }} className='m-4'>
          <Card.Body>
            <Card.Title className='m-2'>.DBF Consulting</Card.Title>
            <Card.Subtitle className='m-2'> July/2016 - January/2018</Card.Subtitle>
            <Card.Text>
              <ListGroupItem>                
                During my career at .DBF Consulting, I have installed and configurated security
                cameras (CFTV), maintained software and hardware of Intel laptops and
                printers. I also installed ethernet cable (Cat 6), wireless router with a dual Wi-Fi
                ranger extensor.
              </ListGroupItem>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h1 className='text-center m-2'>Education</h1>
      <div className='d-flex flex-wrap justify-content-center'>
      <Card style={{ width: '50rem' }} className='m-4'>
        <Card.Body>
          <Card.Title className='m-2'>Wells International College - Sydney - Australia</Card.Title>
          <Card.Subtitle className='m-2'> March/2019 - March/2020 </Card.Subtitle>
          <Card.Text>
            <ListGroupItem>                
              Diploma of Software Development - Focused on OOP
            </ListGroupItem>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '50rem' }} className='m-4'>
        <Card.Body>
          <Card.Title className='m-2'>Victoria University - Sydney - Australia</Card.Title>
          <Card.Subtitle className='m-2'> July/2020 - Present </Card.Subtitle>
          <Card.Text>
            <ListGroupItem>                
              Bachelor of Information Technology - Major in Web and Mobile Application Development
            </ListGroupItem>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '50rem' }} className='m-4'>
          <Card.Body>
            <Card.Title className='m-2'>The University of Sydney- Sydney - Australia</Card.Title>
            <Card.Subtitle className='m-2'> Ausgust/2021 - February/2022 </Card.Subtitle>
            <Card.Text>
              <ListGroupItem>                
                Full Stack Development Certificate
              </ListGroupItem>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h1 className='text-center m-2'>Certificate</h1>
      <div className='d-flex flex-wrap justify-content-center'>
      <Card style={{ width: '50rem' }} className='m-4'>
        <Card.Body>
          <Card.Title className='m-2'>AWS Certified Cloud Practitioner</Card.Title>
          <Card.Subtitle className='m-2'> May/2021 - May/2024 </Card.Subtitle>          
        </Card.Body>
      </Card>
      <Card style={{ width: '50rem' }} className='m-4'>
        <Card.Body>
          <Card.Title className='m-2'>AWS Certified Cloud Developer - Associate</Card.Title>
          <Card.Subtitle className='m-2'> August/2021 - August/2024 </Card.Subtitle>          
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}
