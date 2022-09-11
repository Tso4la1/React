import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './logo.svg';
import SubmissionForm from './submissionComponent';

const FooterComponent = () => {

    return ( 
        <footer className='bg-dark'>
            <Row  className='container-fluid pt-5 pb-5'>
                    <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <img src={logo} style={{ maxWidth: '70px' }} alt='Company Logo' />
                        <p className='text-light'>
                            So this is a sample of a Footer in React JS and it's fun to learn Coding in JSX
                        </p>
                        

                        </div>
                </Col>
                
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                        Contact Us
                        </h3>
                        <p className='text-light'>
                            So this is a sample of a Footer in React JS and it's fun to learn Coding in JSX
                        </p>
                        </div>
                </Col>
                
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                        Address
                        </h3>
                        <p className='text-light'>
                            So this is a sample of a Footer in React JS and it's fun to learn Coding in JSX
                        </p>
                        </div>
                </Col>
                
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                        Subscribe
                        </h3>
                        <SubmissionForm />
                        </div>
                </Col>
                </Row>
        </footer>
     );
}
 
export default FooterComponent;
