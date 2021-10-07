import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ActiveOrders = () => {
  const model = useSelector(state => state);
  const dispatch = useDispatch();

  const userId = model.userData.user.id;

  // useState
  const [userActiveOrders, setUserActiveOrders] = useState([{orderId: '', unit_service_id: '', vendor_id: '', userOrderId: '', total_price: '', created_at: ''}]);

  useEffect(() => {
    axios.get(`http://localhost:3000/order/useractiveorder/${userId}`)
      .then((res) => {
        setUserActiveOrders(res.data.userActiveOrders);
      })
      .catch((err) => console.log(err));
  });
  
  return (
    <>
      {console.log(userActiveOrders)}
      <h1>Your active cards</h1>
    </>
  );
}

export default ActiveOrders;