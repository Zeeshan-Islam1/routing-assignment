import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import item1 from '../pages/images/item1.avif';
import item2 from '../pages/images/item2.webp';
import item3 from '../pages/images/item3.webp';
import item4 from '../pages/images/item4.jpeg';
import item5 from '../pages/images/item5.jpg';
import item6 from '../pages/images/item6.jpg';
import item7 from '../pages/images/item7.jpg';
import item8 from '../pages/images/item8.avif';
import item9 from '../pages/images/item9.avif';






export const Shop = () => {
    return (
        <div>
           <Container className="py-5">
      <Row className="g-4">
        {/* Card 1 */}
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Img variant="top" src={item1} style={{ height: "250px", objectFit: "cover" }} />
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
            <Card.Img variant="top" src={item2} style={{ height: "250px", objectFit: "cover" }} />
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
            <Card.Img variant="top" src={item3} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", color: "#333" }}> Bape shark sandal </Card.Title>
              <Card.Text>Top-quality material with streetwear vibes. Limited stock!</Card.Text>
              <Button variant="dark">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <hr />
    <Container className="py-5">
      <Row className="g-4">
        {/* Card 1 */}
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Img variant="top" src={item4} style={{ height: "250px", objectFit: "cover" }} />
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
            <Card.Img variant="top" src={item5} style={{ height: "250px", objectFit: "cover" }} />
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
            <Card.Img variant="top" src={item6} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", color: "#333" }}> Bape shark sandal </Card.Title>
              <Card.Text>Top-quality material with streetwear vibes. Limited stock!</Card.Text>
              <Button variant="dark">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <hr />
    <Container className="py-5">
      <Row className="g-4">
        {/* Card 1 */}
        <Col md={4}>
          <Card className="h-100 text-center">
            <Card.Img variant="top" src={item7} style={{ height: "250px", objectFit: "cover" }} />
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
            <Card.Img variant="top" src={item8} style={{ height: "250px", objectFit: "cover" }} />
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
            <Card.Img variant="top" src={item9} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "1.5rem", color: "#333" }}> Bape shark sandal </Card.Title>
              <Card.Text>Top-quality material with streetwear vibes. Limited stock!</Card.Text>
              <Button variant="dark">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

        </div>
    );
};