import Carousel from 'react-bootstrap/Carousel';
import elden from "../../assets/img/elden.png";
import halo from "../../assets/img/halo.png";
import forza from "../../assets/img/forza.png";
import { CarouselContainer } from "./Carousel_Style";

export const CarouselOne = () => {
  return (
    <CarouselContainer>
    <Carousel fade>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={halo}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={forza}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={elden}
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={forza}
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
    </CarouselContainer>
  );
}