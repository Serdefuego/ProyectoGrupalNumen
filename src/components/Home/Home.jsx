import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

const Home = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='../../src/assets/imgs/CARRUSEL1.png' className='carousel-img'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='../../src/assets/imgs/CARRUSEL2.PNG' className='carousel-img'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='../../src/assets/imgs/CARRUSEL3.PNG' className='carousel-img'/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;