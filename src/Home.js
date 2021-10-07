import React, { useState} from 'react';//A1
import Nav from './components/homeComponents/navComponents/Nav';//A2k
import Service from './components/homeComponents/servicesComponents/Service';//A3
import PlateForm from './components/homeComponents/plateformComponents/PlateForm';//A4
import { serviceDatas } from './list';//A5
// import { subServiceDatas } from './subServices';//A6
import Carousel from 'react-elastic-carousel';//A7
import { Container, Form, Jumbotron, Modal} from 'react-bootstrap';//A8
import { colors } from './ColorCode';//A9
import { useSelector, useDispatch } from 'react-redux';//A10
import { showModel } from './redux/user/userAction';//A11 
import Item from './Item'; //A21
import axios from 'axios'; //Axios for server request

// Importing Components
import OrderCard from './components/orderComponents/orderCard';
import ActiveOrders from './components/homeComponents/activeOrders';

//A13
const Home = () => {
    const [show, setShow] = useState(false);//A14
    const [subService, setSubService] = useState([{id : 1, name : 'test', image : 'test'}]);//A15
    const [select, setSelect] = useState(false);//A22
    const [selectId, setSelectId] = useState('0');//A23
    const [completeProfile, setCompleteProfile] = useState(true);//For complete Profile
    const [showserviceForm, setShowserviceForm] = useState(false);//for send service request
    const [showOrderCard, setShowOrderCard] = useState(false); 
    
    const model = useSelector(state => state);//A16
    const dispatch = useDispatch();//A17

    //------------------------------------------------------------//
    
    const [ustate, setUstate] = useState(''); //User state 
    const [address, setAddress] = useState(''); //user address
    const [pincode, setPincode] = useState(''); //user pincode

    //----------------------------------------------------------------//

    const [uname, setUname] = useState(''); // user address
    const [ucontact, setUcontact] = useState(''); // user contact details
    const [uaddress, setUaddress] = useState(''); // user address
    const [uProblem, setUProblem] = useState('');
    const [unitserviceData, setUnitserviceData] = useState([{id : 1, name:'test'}]);
    const [unitServiceId, setUnitServiceId] = useState('');
    
    //-----------------------------USER ORDER DETAILS-----------------------------//

    const [userOrderDetails, setUserOrderDetails] = useState({orderId: '', user_id: '', name: '', contact: '', email: '', unitServiceId: '', vendorId: '', userOrderId: '', price: '', created_at: ''});
    
    //-------------------------------------------------------------------//
    
    const breakPoint = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2},
      { width: 768, itemsToShow: 4},
      { width: 1200, itemsToShow: 4}
    ];//A12
    
    const breakPoint2 = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1},
      { width: 768, itemsToShow: 1},
      { width: 1200, itemsToShow: 1 }
    ];//A12

    var getHeight = function (elem) {
      elem.style.display = 'block'; // Make it visible
      var height = elem.scrollHeight + 'px'; // Get it's height
      elem.style.display = ''; //  Hide it again
      return height;
    };

    //A18 start
    //This is for child Service
    function checkService(id){
      if(id === '0'){
        axios.get(`http://localhost:3000/service/childservices/A00`)
        .then((res)=>{
          setSubService(res.data['childServices']);
        })
        .catch((err) => console.log(err));
        
        const elem = document.getElementById('subServicecarousel');
        if(show === false){
          setSelectId(id);
          setShow(true);
          // setSubService(subServiceDatas);
          let height = getHeight(elem); // Get the natural height
          elem.classList.add('is-visible'); // Make the element visible
          elem.style.height = height; // Update the max-heig
          // Once the transition is complete, remove the inline max-height so the content can scale responsively
          window.setTimeout(function () {
              elem.style.height = '';
              setSelect(true);
          }, 350);
        }
        else{
          setSelectId('1');
          setSelect(false);
          setShow(false);
          // Give the element a height to change from
          elem.style.height = elem.scrollHeight + 'px';
          // Set the height back to 0
          window.setTimeout(function () {
              elem.style.height = '0';
          }, 1);
          // When the transition is complete, hide it
          window.setTimeout(function () {
              elem.classList.remove('is-visible');
          }, 1000);
        }
      }
      else{
        alert("We are working on this service");
      }
    }
    //A18 stop

    function SendServiceData(id){
      axios.get(`http://localhost:3000/service/unitservices/A00A0`)
      .then(function(res){
        setUnitserviceData(res.data['unitServices']);
      })
      .catch(function(err){
        console.log(err);
      });
    }

    //A19 start
    function openService(id) {
      if(model.login === false){
        dispatch(showModel())
      }
      else{
        if(id === 'A00A0'){
          SendServiceData(id);
          setShowserviceForm(true);
        }
        else{
          alert("We are working on this service");
        }
      }
    }
    //A19 stop

    //A24
    function showCarousel() {
      if(select){
        return(
          <Container className="mt-5" style={{ display : select ? 'block':'none' }}>
              <Carousel 
                breakPoints={breakPoint2}
                pagination={false} 
                transitionMs={1000} 
              >
                <Item onClick={() => checkService(serviceDatas[selectId]['id'])}>
                  <Service 
                    name={serviceDatas[selectId]['name']} 
                    image={select ? serviceDatas[selectId]['image2']:serviceDatas[selectId]['image']} 
                  />
                </Item>
              </Carousel>
            </Container>
        )
      }
      else{
        return(
          <Container className="mt-5" style={{ display : select ? 'none':'block' }}>
              <Carousel 
                breakPoints={breakPoint}
                transitionMs={1000} 
              >
              {serviceDatas.map(item =>
                <Item key={item['id']} id={item['id']} onClick={() => checkService(item['id'])}>
                  <Service name={item['name']} image={select ? item['image2']:item['image']} />
                </Item>
              )}
              </Carousel>
          </Container>
        )
      }
    }

    //Complete profile data 
    function submitProfileData(e){
      e.preventDefault();
      const profileData = {
        state : ustate,
        address : address,
        pincode : pincode
      };
      let user_id = model.userData['user']['id'];
      axios.post(`http://localhost:3000/user/updateuser/${user_id}`, profileData)
      .then(function(res){
        console.log(res.data);
      })
      .catch(function(err){
        console.log(err);
      });
      console.log(profileData);
    };

    //Check Complete profile
    function checkCompleteProfile(){
      if(model.userData['user']){
        if(model.userData['user']['complete_profile'] === 'No'){
          return(
            <>
              <Modal show={completeProfile} onHide={() => setCompleteProfile(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Update Your profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form id="completeProfileForm">
                    <Form.Group>
                      <Form.Label>Enter state</Form.Label>
                      <Form.Control placeholder="Enter state" type="text" onChange={(e) => setUstate(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Enter address</Form.Label>
                      <Form.Control as="textarea" rows={3} onChange={(e) => setAddress(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Enter pincode</Form.Label>
                      <Form.Control placeholder="Enter pincode" type="text" onChange={(e) => setPincode(e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                      <Form.File id="exampleFormControlFile1" label="Upload your profile pic" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control type="submit" value="submit data" onClick={submitProfileData}/>
                    </Form.Group>
                  </Form>
                </Modal.Body>
              </Modal>
            </>
          )
        }
      }
    }

    const sendUserOrder = (e) => {
      e.preventDefault();

      let userId = model.userData['user']['id'];
      let userEmail = model.userData['user']['email']
      const userOrder = {
        user_id: userId,
        name: uname,
        contact: ucontact,
        email: userEmail,
        unit_service_id: unitServiceId,
        problem_details: uProblem
      };

      axios.post(`http://localhost:3000/user/userorder`, userOrder)
      .then( (res) => {
        // console.log(res.data.orderDetails);
        if (res.data.success){

          setUserOrderDetails(res.data.orderDetails);

          setShowOrderCard(true);
          setShowserviceForm(false);
        } else{
          console.log(res.message);
        }
      })
      .catch(function(err){
        console.log(err);
      });
    }

    //A20 start
    return(
        <>
          {console.log(model)}
          <Nav />{/** A20-1 */}
          <Container className="mt-3">
            <Container className="mt-3 p-3 text-center" style={{ backgroundColor : colors.first }}>
                <h3>Our services</h3>
            </Container>
            <br /><br />
            {showCarousel()}
            {checkCompleteProfile()}
{/*** -----------------------------------------------------------------------------------------------------  */}
            {/**A20-3 start*/}
            <Container id="subServicecarousel" className="mt-5 toggle-content .show-slow">
              <Carousel breakPoints={breakPoint}>
                {subService.map(items => 
                    <Item key={items['id']} id={items['id'].toString()} onClick={() => openService(items['id'])}>
                      <Service name={items['name']} image={'http://localhost:3000/images/'+items['image']} subServices={100}/>
                    </Item>
                )}
              </Carousel>
            </Container>
            {/**A20-3 stop*/}

            <br /><br />
            <hr />
            <Container className="mt-3 border p-3">
              <PlateForm />
            </Container>
            <hr />
            <br /><br />
          </Container>

          {/** Unit Service Form  Start*/}
          <Modal show={showserviceForm} onHide={() => setShowserviceForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Send Request</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Label>Enter name</Form.Label>
                  {/* <Form.Control placeholder="Enter name" type="text" value={uname ? uname : model.userData['user']['name']} onChange={(e) => setUname(e.target.value)}/> */}
                  <Form.Control placeholder="Enter name" type="text" value={uname} onChange={(e) => setUname(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter contact</Form.Label>
                  <Form.Control type="number" placeholder="Enter number" value={ucontact} onChange={(e) => setUcontact(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter address</Form.Label>
                  <Form.Control as="textarea" rows={1} value={uaddress} onChange={(e) => setUaddress(e.target.value)}/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Enter problem</Form.Label>
                  <Form.Control as="textarea" rows={1}  onChange={(e) => setUProblem(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Example multiple select</Form.Label>
                  <Form.Control as="select" onChange={(e) => setUnitServiceId(e.target.value)}>
                    {
                      unitserviceData.map(items => (
                          <option value={items['id']}>{items['name']}-{items['price']}</option>
                      ))
                    }
                  </Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="submit" style={{ backgroundColor: colors.second }} value="submit" onClick={sendUserOrder}/>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
          {/** Unit Service Form  Start*/}

          { model.login && <Container>
            <Jumbotron>
              <h1 className={"text-center"}>Your active orders</h1>
              <ActiveOrders />
            </Jumbotron>
          </Container>}

          { showOrderCard && <OrderCard userOrderDetails={userOrderDetails}/>}
        </>
    )
    //A20 stop
}

export default Home;