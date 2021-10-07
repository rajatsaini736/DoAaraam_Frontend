import { Row, Col } from 'react-bootstrap';
import { showModel } from '../../../redux/user/userAction';
import { useSelector, useDispatch } from 'react-redux';
import mobile from '../../../images/smartphone.svg';
import web from '../../../images/web.svg';
import call from '../../../images/phone-call.svg';
import whatsapp from '../../../images/whatsapp.svg';

const PlateForm = () => {
  const reduxData = useSelector(state => state);
  const dispatch = useDispatch();

  const mobilesfun = () => {
    if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1 ) 
    {
        alert('Opera');
    }
    else if(navigator.userAgent.indexOf("Chrome") !== -1 )
    {
        alert('Chrome');
    }
    else if(navigator.userAgent.indexOf("Safari") !== -1)
    {
        alert('Safari');
    }
    else if(navigator.userAgent.indexOf("Firefox") !== -1 ) 
    {
         alert('Firefox');
    }
    else if((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )) //IF IE > 10
    {
      alert('IE'); 
    }  
    else 
    {
       alert('unknown');
    }
  }

  const phoneCall = () => {
    if (reduxData.login === false) {
      dispatch(showModel());
    }
    else {
      window.location.href="tel:6205208894";
    }
  }

  const whatsaapCall = () => {
    if (reduxData.login === false) {
      dispatch(showModel());
    }
    else {
      window.location.href="https://wa.me/916205208894?text=I'm%20Rohit";
    }
  }

  return (
    <>
      <Row className="text-center">
        <Col sm={1}>

        </Col>
        <Col sm={3}>
          <br />
          <h3>Our Active Platforms</h3>
        </Col>
        <Col sm={2} className="mt-3">
          <img
            className="shadow btn rounded"
            src={mobile}
            alt="mobile icon"
            title="mobile"
            style={{ width: 100, height: 100 }}
            onClick={mobilesfun}
          />
        </Col>
        <Col sm={2} className="mt-3">
          <img
            className="shadow btn"
            src={web}
            title="web"
            alt="web icon"
            style={{ width: 100, height: 100 }}
          />
        </Col>
        <Col sm={2} className="mt-3">
          <img
            className="shadow btn"
            src={call}
            alt="call icon"
            title="call"
            style={{ width: 100, height: 100 }}
            id="calling"
            onClick={phoneCall}
          />
        </Col>
        <Col sm={2} className="mt-3">
          <img
            className="shadow btn"
            src={whatsapp}
            title="whatsapp"
            alt="whatsapp icon"
            style={{ width: 100, height: 100 }}
            id="whatsapp"
            onClick={whatsaapCall}
          />
        </Col>
      </Row>
    </>
  )
}

export default PlateForm;