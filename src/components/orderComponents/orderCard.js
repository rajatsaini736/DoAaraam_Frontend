import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import {colors} from '../../ColorCode';
import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetailsPage from './orderDetailsPage';
// import response from '../../requestOrderResponse';

function OrderCard(props){
    const {userOrderDetails} = props;

    const [showOrdersDetailsPage, setShowOrdersDetailsPage] = useState(false); 
    const [paymentStatus, setPaymentStatus] = useState(false);
    const [orderDetails, setOrderDetails] = useState(userOrderDetails);
    const [completeOrderDetails, setCompleteOrderDetails] = useState({id: '', orderID: '', price: '', vendorRating: '', userRating: '', vendorComment: ''});
    const [seconds, setSeconds] = useState(30);
    const [minutes, setMinutes] = useState(0);

    const time = orderDetails.created_at.split(" ")[4];

    const payment = () => {
      axios.get('http://localhost:3000/payment')
        .then( (res) => {
          if (res.data.success){
            setPaymentStatus(true);

            // Saving complete order in "complete_orders" & update complete status in "user_orders"
            let order_id = orderDetails.orderId;
            let price = orderDetails.price;
            let user_order_id = orderDetails.userOrderId;

            axios.post('http://localhost:3000/order/completeorder', {order_id, price, user_order_id})
              .then((res) => {
                if (res.data.success){
                  setShowOrdersDetailsPage(true);
                  setCompleteOrderDetails(res.data.completeOrderDetails);
                } else{
                  console.log(res.data.message);
                }
              })
              .catch((err) => console.log(err));
          } else{
            console.log("error");
          }
        })
        .catch( (err) => console.log(err));
    }

    useEffect(() => {
        let myInterval = setInterval(() => {
            if(seconds > 0){
                setSeconds(seconds - 1);
            }else{
                if(minutes === 0){
                    clearInterval(myInterval);
                }else{
                    setMinutes(minutes - 1);
                    setSeconds( 59);
                }
            }
        }, 1000);
        return ()=>{
            clearInterval(myInterval);
        }
    });

    return (
        <>
            <Container className="mb-5">
                <Row>
                    <Col md={4} className="mx-auto">
                        <Card className="shadow">
                            <Card.Header style={{ backgroundColor: colors['first']}} className="text-center">
                                <Card.Title>Order Request</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Card.Subtitle className="mt-1">Order Id</Card.Subtitle>
                                    </Col>
                                    <Col md={6}><Card.Text>{orderDetails.orderId}</Card.Text></Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Card.Subtitle className="mt-1">Requested service</Card.Subtitle>
                                    </Col>
                                    <Col><Card.Text>{orderDetails.unitServiceId}</Card.Text></Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Card.Subtitle className="mt-1">Vendor details</Card.Subtitle>
                                    </Col>
                                    <Col>
                                        <Card.Text>{orderDetails.vendorId}</Card.Text>
                                        {/* <Card.Text>7073491568</Card.Text> */}
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Card.Subtitle className="mt-1">Timer</Card.Subtitle>
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            { minutes === 0 && seconds === 0 ? 'Timer completed' : <p>{minutes}: {seconds}</p>}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col>
                                        <Card.Subtitle className="mt-1">Estimated price</Card.Subtitle>
                                    </Col>
                                    <Col>
                                        <Card.Text>{orderDetails.price}</Card.Text>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                  <Col md={4} className="mx-auto">
                                    <Button style={{ backgroundColor: colors['first']}} onClick={payment}>Pay</Button>
                                  </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className="text-muted">If the vendor will not accept your request in next 2 hours, the request will be re-assigned to another vendor.</Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* {ORDER DETAILS PAGE} */}
            
            { showOrdersDetailsPage && <OrderDetailsPage completeOrderDetails={completeOrderDetails}/>}
        </>
    )
}

export default OrderCard;