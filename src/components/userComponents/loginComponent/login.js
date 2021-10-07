import { Modal, Form, Button, Tab, Row, Col, Nav } from 'react-bootstrap';
import { hideModel, userLogin, userDatas } from '../../../redux/user/userAction';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { colors } from '../../../ColorCode';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');//C1
    const [password, setPassword] = useState('');//C2
    const [sname, setSname] = useState('');//C3
    const [semail, setSemail] = useState('');//C4
    const [spassword, setSpassword] = useState('');//C5
    const [scontact, setScontact] = useState('');

    const model = useSelector(state => state);
    const dispatch = useDispatch();

    //C5
    const checkUser = () => {
      const loginData = {
        email : email,
        password : password
      }
      axios.post('http://localhost:3000/auth/login', loginData)
      .then(function(res){
          dispatch(userLogin());
          dispatch(hideModel());
          dispatch(userDatas(res.data));
      })
      .catch(function(err){
        console.log(err)
      });
    }

    //C6
    const signupUser = () => {
        const userDatas = {
          name : sname,
          email : semail,
          contact : scontact,
          password : spassword
        }

        axios.post('http://localhost:3000/auth/register', userDatas)
        .then(function(res){
          console.log(res.data)
        })
        .catch(function(err){
          console.log(err)
        });
    }
    
    return(
        <>
          <Modal show={model.showModel} onHide={() => dispatch(hideModel())}>
            <Modal.Header closeButton style={{ backgroundColor : '#9CC440' }}>
              <Modal.Title>Please Login First</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Tab.Container id="left-tabs-example" defaultActiveKey="login">
                <Nav variant="pills" className="flex-column">
                  <Row>
                    <Col sm={6}>
                        <Nav.Item className="text-center">
                          <Nav.Link eventKey="login" style={{ color : 'black' }}>Login</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col sm={6}>
                        <Nav.Item className="text-center">
                          <Nav.Link eventKey="signup" style={{ color : 'black' }}>Signup</Nav.Link>
                        </Nav.Item>
                    </Col>
                  </Row>
                </Nav>
                <hr />
                  <Tab.Content>
                    <Tab.Pane eventKey="login">
                      <Form className="mt-3">
                        <Form.Group>
                          <Form.Label>Email address</Form.Label>
                          <Form.Control 
                            type="email" 
                            id="email" 
                            placeholder="Enter email" 
                            onChange={(e) => setEmail(e.target.value)}  
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control 
                            type="password" 
                            id="password" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Form.Group>
                        <div className="text-center">
                          <Button  style={{ backgroundColor : colors.second }} onClick={checkUser}>Submit</Button>
                        </div>
                      </Form>
                    </Tab.Pane>
                    <Tab.Pane eventKey="signup">
                      <Form className="mt-3">
                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control 
                            type="text" 
                            id="s_name" 
                            placeholder="Enter name"
                            value={sname} 
                            onChange={(e) => setSname(e.target.value)}  
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control 
                            type="email" 
                            id="s_email" 
                            placeholder="Enter email" 
                            value={semail}
                            onChange={(e) => setSemail(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Contact</Form.Label>
                          <Form.Control 
                            type="number" 
                            id="s_contact" 
                            placeholder="Enter contact number" 
                            value={scontact}
                            onChange={(e) => setScontact(e.target.value)}
                          />
                        </Form.Group>
                        <Form.Group>
                          <Form.Label>Password</Form.Label>
                          <Form.Control 
                            type="password" 
                            id="s_password" 
                            placeholder="Password"
                            value={spassword} 
                            onChange={(e) => setSpassword(e.target.value)}
                          />
                        </Form.Group>
                        <div className="text-center">
                          <Button style={{ backgroundColor : colors.second }} onClick={signupUser}>Submit</Button>
                        </div>
                      </Form>
                    </Tab.Pane>
                  </Tab.Content>
              </Tab.Container>
            </Modal.Body>
          </Modal>
        </>
    )
}

export default Login;