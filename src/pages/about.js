import { Button } from "react-bootstrap";


export const About = () => {
    return (
        <div style={{
          maxWidth: '800px', 
          margin: '0 auto', 
          padding: '20px', 
          fontFamily: 'Arial, sans-serif', 
          backgroundColor: '#f4f4f4', 
          borderRadius: '10px', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <h1 style={{
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: '#333', 
            textAlign: 'center', 
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Discover Of BAPE</h1>
          <p style={{
            fontSize: '1.2rem', 
            lineHeight: '1.8', 
            color: '#555', 
            textAlign: 'justify',
            marginBottom: '20px',
            fontFamily: 'italic',
          }}>
            BAPE, short for "A Bathing Ape," is a Japanese luxury streetwear brand founded in 1993 by Nigo. Known for its bold designs, including the iconic ape head logo and camo patterns, BAPE has become a staple in street fashion. From their legendary BAPE Sta sneakers to their high-quality hoodies, the brand seamlessly blends luxury with street culture. Over the years, BAPE has collaborated with major brands like Nike and Adidas, cementing its place in both the fashion world and pop culture.
          </p>
          <Button variant="dark" href="/shop">Learn More</Button>
        </div>
      );
};