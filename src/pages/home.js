import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

// Slider Css
import "./HoodieSlider.css";



import hoodieImg from "../pages/images/main.jpg";
import hoodieImg2 from "../pages/images/home2.jpg";
import hoodieImg3 from "../pages/images/home3.avif";
import hoodieImg5 from "../pages/images/home5.jpg";
import hoodieImg6 from "../pages/images/home6.webp";
import hoodieImg7 from "../pages/images/home7.webp";
import hoodieImg8 from "../pages/images/home8.webp";
import hoodieImg9 from "../pages/images/home9.webp";
import hoodieImg10 from "../pages/images/home10.webp";
import hoodieImg11 from "../pages/images/home11.webp";
import hoodieImg12 from "../pages/images/home12.webp";
import hoodieImg13 from "../pages/images/home13.webp";
import hoodieImg15 from "../pages/images/home15.webp";



import img1 from "../pages/images/img01.jpg";  
import img2 from "../pages/images/slider2.webp";   
import img3 from "../pages/images/slider3.jpg";  
import img4 from "../pages/images/slider4.jpg";  
import img5 from "../pages/images/slider5.jpg";  
import img6 from "../pages/images/slider6.jpg";  


import shoes1 from "../pages/images//shoes1.webp";
import shoes2 from "../pages/images//shoes2.webp";
import shoes3 from "../pages/images//shoes3.webp";





export const Home = () => {
    return (
        <div>
               <Container className="py-5">
      <Row className="align-items-center">
        {}
        <Col md={6} className="text-center">
          <img
            src={hoodieImg}
            alt="BAPE Hoodie"
            style={{ width: "100%", maxWidth: "700px", height: "500px", borderRadius: "0% 100% 53% 47% / 100% 0% 100% 0% ", objectFit: "cover", objectPosition: "center",  }}
          />
          
          <Button variant="dark" className="mt-4" size="lg" href="/shop">
            Shop Now
          </Button>
          
        </Col>

        {}
        <Col md={6}>
          <h1 className="mb-4" style={{ fontSize: "5rem",fontFamily: "Bebas Neue sans-serif " ,fontWeight: "400"  , color: "#333", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" , }}>Exclusive <h2 style={{ fontSize: "9rem", fontStyle : "italic",color: "#ffc107", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}> BAPE</h2>  Hoodies</h1>
          <p style={{ fontSize: "18px", color: "#555",fontFamily: "Bebas Neue sans-serif " ,fontWeight: "400" }}>
            Discover the latest BAPE collection. Premium quality, iconic streetwear style. Limited stock available – grab yours now!
          </p>
        </Col>
      </Row>
    </Container>
    <br />
      {/* // Slider Section// */}
      <Container className="py-5">
      <Carousel indicators={false}>
        {/* Slide 1 */}
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg2} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 01</Card.Title>
                  <Card.Text>Exclusive BAPE hoodie with premium material. Stay stylish!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg3} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 02</Card.Title>
                  <Card.Text>Limited edition drop. Grab your favorite color hoodie now!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg5} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 03</Card.Title>
                  <Card.Text>Top-quality material with streetwear vibes. Limited stock!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg6} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 04</Card.Title>
                  <Card.Text>Another stylish hoodie with premium vibes!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg7} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 05</Card.Title>
                  <Card.Text>Winter collection special edition!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg8} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 06</Card.Title>
                  <Card.Text>Get your streetwear game strong!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg9} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 07</Card.Title>
                  <Card.Text>Another stylish hoodie with premium vibes!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg10} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 08</Card.Title>
                  <Card.Text>Winter collection special edition!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg11} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 09</Card.Title>
                  <Card.Text>Get your streetwear game strong!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        { /* Slide 4 */ }
        <Carousel.Item>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg12} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 10</Card.Title>
                  <Card.Text>Another stylish hoodie with premium vibes!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg13} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 11</Card.Title>
                  <Card.Text>Winter collection special edition!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center">
                <Card.Img variant="top" src={hoodieImg15} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>Hoodie 12</Card.Title>
                  <Card.Text>Get your streetwear game strong!</Card.Text>
                  <Button variant="dark">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

      </Carousel>
    </Container>
      <hr />
    <Container className="py-5">
    <Carousel>
    <h1
  style={{
    fontSize: "60px",
    fontWeight: "bold",
    color: "#111",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "5px",
    marginBottom: "30px",
    textShadow: "2px 2px 10px rgba(0, 0, 0, 0.49)"
    
  }}
>
  Hoodie / Collections
  <h2
  style={{
    fontSize: "20px",
    fontWeight: "700",
    color: "#111", 
    textAlign: "center",
    marginBottom: "10px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    textShadow: "1px 1px 8px rgba(0,0,0,0.5)"
  }}
>
  Here are some of our exclusive hoodies
</h2>

</h1>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="First slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Hoodie 01</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Hoodie 02</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Hoodie 03</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Hoodie 04</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Hoodie 05</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Third slide"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <h3>Hoodie 06</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    <Container className="py-5">
            <h1 className="mb-4 mt-5" style={{ fontSize: "3rem", color: "#333" ,backgroundColor: "#FFD700",fontFamily:"cursive",padding:"20px",borderRadius:"40px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}>Hoodie Shoes stocks are limited ! </h1>
      <Row className="g-4">
        {/* Card 1 */}

        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Img variant="top" src={shoes1} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.6rem", color: "#333" }}>No 1 Sneaker Bape</Card.Title>
              <Card.Text>Exclusive BAPE hoodie with premium material. Stay stylish!</Card.Text>
              <Button variant="dark">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Img variant="top" src={shoes2} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.6rem", color: "#333" }}>Bape Shark Shoe </Card.Title>
              <Card.Text>Limited edition drop. Grab your favorite color hoodie now!</Card.Text>
              <Button variant="dark">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Img variant="top" src={shoes3} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", color: "#333" }}> Bape shark sandal </Card.Title>
              <Card.Text>Top-quality material with streetwear vibes. Limited stock!</Card.Text>
              <Button variant="dark">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <Container className="py-5">
      <Row className="align-items-center">
        {}
        <Col md={6}>
          <img
            src={feedback}
            alt="BAPE Hoodie"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </Col>

        {}
        <Col md={6}>
          <h2
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#111",
              textTransform: "uppercase",
              letterSpacing: "3px",
              backgroundColor: "#FFD700",
              padding: "10px 20px",
              borderRadius: "5px"
            }}
          >
            BAPE Hoodie
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#555",
              maxWidth: "500px"
            }}
          >
            Discover the iconic BAPE hoodies, blending streetwear culture
            with unmatched quality and style. Made from premium materials
            and designed for those who dare to be different. Stay fresh, stay legendary!
          </p>
          <Button variant="dark">Exculsive Hoodies</Button>
        </Col>
      </Row>
    </Container>

        </div>
    );
};

