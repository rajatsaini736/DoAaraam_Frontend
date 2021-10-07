import React, { useState } from 'react';//A1
import { Navbar, Button, Modal } from 'react-bootstrap';//A2
import logo from '../../../images/logo.jpg';//A3
import Login from '../../userComponents/loginComponent/login';//A4
import { showModel, userLogout, userDatas } from '../../../redux/user/userAction';//A4
import { useSelector, useDispatch } from 'react-redux';//A5
import AllServices from '../servicesComponents/AllServices';//A6

//A7 Start
const LoginCheck = () => {
  const reduxData = useSelector(state => state);
  const dispatch = useDispatch();

  if (reduxData.login === true) {
    return (
      <>
      <img src="http://placekitten.com/35/35" alt="user img"/>
      &nbsp;&nbsp;
      <Button className="btn border shadow" variant="light" onClick={() => { dispatch(userLogout()); alert('log out'); dispatch(userDatas()) }}>
        LogOut
      </Button>
      </>
    )
  }
  else {
    return (
      <Button className="btn border shadow" style={{ backgroundColor : '#B18BBE' }} onClick={() => dispatch(showModel())}>
        Login & Signup
      </Button>

    )
  }
}

//A7 Stop

const NavComponent = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar className="shadow" style={{ backgroundColor: '#FFFFFF' }}>
        <Navbar.Brand href="/">
          <img
            className="shadow"
            style={{ height: 50, width: 150 }}
            src={logo}
            alt="logo"
            onMouseOver={() => setShow(true)}
          />
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="p-2">
            <LoginCheck />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Login />

      {/** A8 */}
      <Modal show={show} onHide={() => setShow(false)} size="lg">
        <Modal.Header closeButton style={{ backgroundColor : '#9CC440' }}>
          <Modal.Title>All Services</Modal.Title>
        </Modal.Header>
        <Modal.Body><AllServices /></Modal.Body>
      </Modal>
    </>
  )
}

export default NavComponent;