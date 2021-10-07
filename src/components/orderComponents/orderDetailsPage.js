import { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

function OrderDetailsPage(props){
  const {completeOrderDetails} = props

  return (
    <>
        <h1 className="text-center"> Order Details Page</h1>
        <Jumbotron>
          <Container>
            <p>{completeOrderDetails.id}</p>
            <p>{completeOrderDetails.orderID}</p>
            <p>{completeOrderDetails.price}</p>
            <p>{completeOrderDetails.vendorRating}</p>
            <p>{completeOrderDetails.userRating}</p>
            <p>{completeOrderDetails.vendorComment}</p>
          </Container>
        </Jumbotron>
    </>
  );
}

export default OrderDetailsPage;