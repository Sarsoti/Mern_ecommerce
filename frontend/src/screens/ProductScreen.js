import {React,useEffect,useState} from 'react';
// import products from '../products'
import {Row, Col, ListGroup, Button, Card} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({match}) => {

    // const product = products.find((p) => p._id === match.params.id);

    const [product,setProduct]= useState({});

  useEffect(() => {
    const fetchProduct = async() => {
      const res = await axios.get(`http://localhost:5000/api/products/${match.params.id}`);
      const data = res.data;
      setProduct(data);
    };
   fetchProduct();
  }, [match.params.id]);
    return (
        <>
         <Row>
             <Col md = {6} >
              <img src = {product.image} alt = {product.name}>
              </img>
             </Col>

             <Col md = {3}>
             <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item variant="flush">
              <Rating
                value={product.rating}
                text={`(${product.numReviews} reviews)`}
                color="Green"
              ></Rating>
            </ListGroup.Item>

            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
             </Col>

             <Col md={3}>
          <Card color>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>

                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>

                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
         </Row>
        </>
    )
}

export default ProductScreen;