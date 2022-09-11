import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//import { useHistory } from 'react-router-dom';
import imageFile from './images/img2.jpeg';
import { Link } from 'react-router-dom';
import api from './api';

const PostComponent = ({ posts }) => {
    //const history = useHistory();
    const refreshPage = () => {
        window.location.reload(false);
    }

    const deletePost = async (id) => {
       try {
           await api.delete(`/post/${id}`)
           refreshPage()
       } catch (err) {
        console.log(err.message)
    }

    }
    return (  
        <Row>
            {/* <h1>{name}</h1> */}
          
                                {
                posts.map(
                    (post) => (
                       
                        <Col xs={12} md={4} lg={3} key={post.id}>
                            <Card style={{ width: '18rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imageFile} />
                                <Card.Body>
                                    <Card.Title>{posts.title}</Card.Title>
                                    <small>Written by {post.author}</small>
                                    <Card.Text>
                                        {post.body.substring(0,100)}...
                                    </Card.Text>
                                    <Link to={`/posts/${post.id}`}>
                                        <Button variant="outline-primary">Read More</Button>
                                        </Link>
                                    <Button variant="danger" onClick={()=>deletePost(post.id)}>Delete Post</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    )
                )
                        }
        </Row>
    );
}
 
export default PostComponent;