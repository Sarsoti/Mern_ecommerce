import {React,useEffect,useState} from "react";
// import products from '../products';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';


const HomeScreen = () => {

  const [products,setProducts]= useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const res = await axios.get("http://localhost:5000/api/products");
      const data = res.data;
      setProducts(data);
    };
   fetchProducts();
  }, []);

    return (
        <>
          <h1> Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} >
                <Product product = {product}/>
              </Col>
            ))}
          </Row>
        </>
      );
    };
export default HomeScreen
