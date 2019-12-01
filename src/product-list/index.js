import React, { Fragment } from 'react'
import styles from './styles.module.css'
import ProductCard from '../product-card'
import Header from '../header'
import logged from '../logged'
import data from '../data'
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'

const renderCards = (products) => {
  return products.map(product => {
    return (
      <Fragment key={product.id}>
        {logged(ProductCard, product)}
      </Fragment>
    )
  })
}

class ProductList extends React.Component {
  state = {
    isRed: false,
    ownerName: ""
  }

  handleClick = () => {
    this.setState({
      isRed: !this.state.isRed
    })
  }

  render() {
    const themeClass = this.state.isRed ? styles.redContainer : styles.container
    return (
      <Fragment>
          <Button variant="primary" size="lg">Large button</Button>
          <Link to="/checkout">Checkout</Link>

        <Col xs={6} md={4}>
          <Image src="https://images.unsplash.com/photo-1572219479068-8a05d5310ba1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" roundedCircle />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://images.unsplash.com/photo-1571586100127-cdaef780fc61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" rounded />
        </Col>
        <Image src="https://images.unsplash.com/photo-1571217668979-f46db8864f75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" fluid />


        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1569524872948-0ba4d096f997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./photo-1572219479068-8a05d5310ba1.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1569261230225-e0d58c2342c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Fragment>
    )
  }
}

export default ProductList
