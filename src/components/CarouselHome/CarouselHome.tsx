import { Carousel } from "react-bootstrap"

const CarouselHome = () => {
  return (
    <>
        <Carousel>

            <Carousel.Item>
                <img 
                className="d-block w-100"
                style={{maxHeight: "500px", objectFit: "cover"}}
                src="/assets/images/slide1.jpg" 
                alt="slide 1" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img 
                className="d-block w-100"
                style={{maxHeight: "500px", objectFit: "cover"}}
                src="/assets/images/slide2.jpg" 
                alt="slide 2" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                {/*Mobile*/}
                <img 
                className="d-block d-md-none w-100"
                style={{maxHeight: "240px", objectFit: "cover"}}
                src="/assets/images/slide3mobile.jpg" 
                alt="slide 3" />
                {/*Desktop*/}
                <img 
                className="d-none d-md-block w-100"
                style={{maxHeight: "500px", objectFit: "cover"}}
                src="/assets/images/slide3.jpg" 
                alt="slide 3" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> 
    </>
  )
}

export default CarouselHome
