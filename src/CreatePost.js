import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from './api/';

const CreatePost = () => {

  
  const [title, setTitle] = useState('')
  const author =  localStorage.getItem('username')
  const [body, setBody] = useState('')
  const [isPending, setIsPending] = useState(true)
   const history = useHistory();
 
  const post = { title, author, body }
  const handleSubmit = (e) => {

    e.preventDefault();
    setIsPending(false)
    setTimeout(() => {
      
      const createPost = async () => {
        try {
         const response = await api.post('/blogs', post)
          history.push('/')
        } catch (error) {
          console.log(error.response.data)
        }
      }
      createPost()}, 100);
    
  }
    return ( 
        <Row className='pt-5'>
            <Col md={{ span: 6, offset: 3 }} sm={12}>
            <Card style={{ width: 'auto', margin: '10px', padding: '20px' }}>
                <Card.Body>
              <h3 className="m-4">Welcome {author}</h3>                  
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)} />
                <Form.Text className="text-muted">
             Please Enter title
                </Form.Text>
              </Form.Group>
              

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter Author" value={author} />
                </Form.Group>

                <Form.Label className='mt-3'>Enter Your Story</Form.Label>            
                <textarea className="form-control mt-3 mb-3" value={body} onChange={(e)=>setBody(e.target.value)} >
                                
                </textarea>
              {isPending && <Button variant="primary" type="submit">
                Submit
              </Button>}
              {!isPending && <Button variant="primary" type="submit">
                  Submitting the Blog
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
              </Button>}
                        </Form>
                    </Card.Body>
                    </Card>
            </Col>

            </Row>
          );
        }
     
 
export default CreatePost ;