import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
const Footer = () => {
  return (
    
    <div className="footer bg-dark mt-5">
      <Container>
      <Row className='pt-5'>
        <Col md={4}>
            <ul className='text-white'>
                <h3>About </h3>
                <p>Welcome to Smart Cage Factory, a leading innovator in smart and efficient cage solutions. We specialize in designing and manufacturing high-quality cages tailored for various industries, including agriculture, pet enclosures, industrial storage, and research applications.</p>    
            </ul>
        </Col>
        <Col md={4}>
            <ul className='text-white'>
                <h3>Collection</h3>
                <li>
                Goat and Sheep</li>
                <li>
                Cattle Farm</li>
                <li>
                Rabbits</li>
                <li>Pig Farm</li>
                <li>Dogs</li>
                <li>Birds</li>
            </ul>
        </Col>
        <Col md={4}>
        <ul className='text-white'>
          <h3>Contact Us</h3>
          <p><b>Address: </b> TM Nagar Main Road Sambakulam, Kodikulam Madurai, Tamilnadu -625007</p>
               
          <p><b>Email: </b> SmartaCageFactory@gmail.com</p>
          <p><b>Phone number: </b> +91 77085 13500</p>
        </ul>
        <ul className='text-light'>
          <div className="socialmedia-icons">
          <i class="fa-brands fa-instagram fa-xl"></i>
          <i class="fa-brands fa-facebook fa-xl"></i>
          <i class="fa-brands fa-linkedin fa-xl"></i>

          
          </div>
        </ul>
        </Col>
        <div className="copyright mt-5">
        <p className='copyright text-center text-light p-2'>&copy; 2025 Smartcage Factory.All rights reserved.</p>
        </div>
      </Row>
      
    </Container>
  
    </div>
    
  )
}


export default Footer