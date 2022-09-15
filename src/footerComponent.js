import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from './images/mountain.jpg';
import SubmissionForm from './submissionComponent';

const FooterComponent = () => {
    return (
        <footer className='bg-dark p-2'>
            <Row className='container-fluid mt-5 mb-5'>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <img src={logo} style={{ maxWidth: '70px' }}  alt='Company Logo' />
                        <p className='text-light'>
                        I go to nature every day for inspiration in the day's work.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                            Contact Us
                        </h3>
                        <p className='text-light'>
                            tsolajohn@gmail.com <br />
                            08106007283 <br />
                            
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                            Address
                        </h3>
                        <p className='text-light'>
                            Emiko close off ogunu road, Warri, Delta State.
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} lg={3}>
                    <div className='p-3'>
                        <h3 className='text-light'>
                            Subscribe
                        </h3>
                        < SubmissionForm />
                    </div>
                </Col>
            </Row>
        </footer>
    );
}

export default FooterComponent;