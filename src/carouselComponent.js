import Carousel from "react-bootstrap/Carousel";
import slider1 from './images/long.jpg'

const CarouselComponent = () => {
    return ( 
        <Carousel className="sliderHeight">
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src={slider1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="sliderText">First slide label</h3>
            <p className="sliderText">If you're naturally yourself, you're beautiful. It's nice to just embrace the natural beauty within you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src={slider1}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3 className="sliderText">Second slide label</h3>
            <p className="sliderText">Being natural is incredibly empowering for women because it's just who you are. </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="sliderHeight">
          <img
            className="d-block w-100"
            src={slider1}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3 className="sliderText">Third slide label</h3>
            <p className="sliderText">
            You're embracing all the beautiful things about you from your head to your toes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     );
}
 
export default CarouselComponent;