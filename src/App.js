import React from 'react';
import { Nav, Button, Carousel, Form } from 'react-bootstrap'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'bootstrap/dist/css/bootstrap.css';
import logo from './assets/wazuh-log.svg';
import utilies from './assets/utilies'
import './App.css';
import CardInfo from './components/CardInfo';
import ItemInfo from './components/ItemInfo';

const { emps, cards, items } = utilies

function App() {
  return <div className='App'>
    <header className="px-5 py-3 d-flex">
      <img style={{ marginLeft: '10%' }} src={logo} alt="logo" />

      <div className='d-flex nav-content'>
        <Nav>
          <Nav.Item>
            <Nav.Link className='nav-link' href="/#">Platform</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#">Cloud</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#">Documentation</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/#">Services</Nav.Link>
          </Nav.Item>
        </Nav>

        <Button variant="warning">Install Wazuh</Button>
      </div>
    </header>

    <section className='bg-wazuh-slide'>
      <div className='d-flex flex-column full-height align-items-center justify-content-center mx-auto text-center' style={{ width: '30%' }}>
        <div className='text-white h1 text-bold'>The Open Source Security Platform</div>
        <div className='text-white text-medium my-5'>Unified XDR and SIEM protection for endpoints and cloud workloads.</div>
        <Button variant="warning">Install Wazuh</Button>
      </div>
    </section>

    <section className='px-5 py-3 d-flex justify-content-center'>
      {emps.map(emp => <img className='mx-auto focus-element' height='55px' key={emp} src={emp + '.png'} alt={emp} />)}
    </section>

    <section className='py-5 d-flex flex-column text-center'>
      <div className='h4 mb-2'>Endpoint & Cloud Workload Protection</div>
      <div className='my-1' style={{ fontSize: 13 }}>Wazuh unifies historically separate functions into a single agent and platform architecture.</div>
      <div style={{ fontSize: 13 }}>Protection is provided for public clouds, private clouds, and on-premise data centers.</div>
    </section>

    <section className='px-4 py-4 d-flex justify-content-center'>
      {cards.map(c => <CardInfo
        title={c.title}
        icon={c.icon}
        items={c.items}
      />)}
    </section>

    <section className='d-flex mt-5 pt-5'>
        <div className='col-6 full-height d-flex flex-column justify-content-start align-items-center text-start px-5'>
          <div className='text-start mt-5 px-5'>
            <span className=' text-bold h3'>
              Active XDR protection
              <br/>
              from modern threats
            </span>
            <br/>
            <br/>
            Wazuh provides analysts real-time correlation and context. Active responses are granular, encompassing on-device remediation so endpoints are kept clean and operational.
          </div>
        </div>

        <img className='col-6' src='XDR.png' alt="logo" />
    </section>

    <section className='d-flex'>
        <img className='col-6' src='Cloud.png' alt="logo" />

        <div className='col-6 full-height d-flex flex-column justify-content-start align-items-center text-start px-5'>
          <div className='text-start mt-5 px-5'>
            <span className=' text-bold h3'>
              Explore the potential of
              <br/>
              Wazuh Cloud
            </span>
            <br/>
            <br/>
            Wazuh has created an entirely new cloud-based architecture to reduce complexity and improve security while providing stronger endpoint protection
            <br/>
            <br/>
            <Button variant="warning">Start your free trial</Button>
          </div>
        </div>
    </section>

    <section className='d-flex justify-content-center full-width my-5'>
        {items.map(item => <ItemInfo title={item.title} info={item.info} icon={item.icon} />)}
    </section>

    <section className='my-5 full-width'>
      <div className='full-width text-center text-primary text-bold py-4'>
        What our customers say about us
      </div>

      <div className='full-width px-5 mt-5'>
        <Carousel interval={null} variant="dark">
          <Carousel.Item className='bg-blue mx-auto slide-content rounded pt-5'>
            <img className='absolute' src='double-quotes.png' alt='double-quotes' style={{ top: 16, right: 10 }} />
            
            <div className='mx-5'>
              <img src='groupon-white.png' alt='groupon-white' />

              <div className='text-white f-13 my-5'>
                We found in Wazuh the most complete security platform. We were seeking an open source SIEM solution that allowed scalability and integration with other tools, which made Wazuh the perfect fit. We achieved our goal, and in addition, we improved the visibility of our environment with the Wazuh monitoring options.
              </div>

              <div className='text-white f-13 text-bold'>
                Martin Petracca, IT Security Manager
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='bg-blue mx-auto  slide-content rounded pt-5'>
          <img className='absolute' src='double-quotes.png' alt='double-quotes' style={{ top: 16, right: 10 }} />
            
            <div className='mx-5'>
              <img src='woop-white.png' height={85} alt='woop-white' />

              <div className='text-white f-13 my-4'>
                In addition to the great advantage of being an open source platform, Wazuh is also easy to deploy, and its multiple capabilities have allowed us to achieve our goal with security at Woop. Wazuh is a unique tool and it’s perfect for startups like Woop that are looking for top security at a competitive cost.
              </div>

              <div className='text-white f-13 text-bold'>
                Haithem Souala, Site Reliability Engineer
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>

    <footer className="bg-dark pt-5 px-5">
      <img src={logo} alt="logo" />
        
      <section className='mt-3 mb-5 d-flex text-white'>
        <div className='col-2'>
          <div className='text-medium my-2 h5 cursor-pointer'>Platform</div>
          <div className='my-2 cursor-pointer'>Product</div>
          <div className='my-2 cursor-pointer'>Cloud</div>
        </div>
        
        <div className='col-2'>
          <div className='text-medium h5 my-2 cursor-pointer'>Documentation</div>
          <div className='my-2 cursor-pointer'>Quickstart</div>
          <div className='my-2 cursor-pointer'>Getting started</div>
        </div>
        
        <div className='col-2'>
          <div className='text-medium h5 my-2 cursor-pointer'>Services</div>
          <div className='my-2 cursor-pointer'>Support</div>
          <div className='my-2 cursor-pointer'>Trainig</div>
        </div>
        
        <div className='col-2'>
          <div className='text-medium h5 my-2 cursor-pointer'>Resourses</div>
          <div className='my-2 cursor-pointer'>Blog</div>
          <div className='my-2 cursor-pointer'>Community</div>
        </div>

        <div className='col-4'>
          <div className='h5 text-bold'>Subscribe to our newsletter</div>

          <div className='d-flex'>
            <Form.Group>
              <Form.Control type="email" placeholder="E-mail Adress" />
            </Form.Group>

            <Button className='mx-3' variant="warning"><FontAwesomeIcon icon={faChevronRight} /></Button>
          </div>
        </div>
      </section>

      <section className='footer-info text-white py-3'>
        <div className='d-flex f-13'>
          <div className='mx-4 cursor-pointer'>© 2022 Wazuh, Inc.</div>|
          <div className='mx-4 cursor-pointer'>Privacy</div>|
          <div className='mx-4 cursor-pointer'>Terms of service</div>
        </div>
      </section>
    </footer>
  </div>
}

export default App;
