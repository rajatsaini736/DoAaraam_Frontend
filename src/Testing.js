// import React, { useState} from 'react';//A1
// import Nav from './components/homeComponents/navComponents/Nav';//A2
// import Service from './components/homeComponents/servicesComponents/Service';//A3
// import PlateForm from './components/homeComponents/plateformComponents/PlateForm';//A4
// import { serviceDatas } from './list';//A5
// import { subServiceDatas } from './subServices';//A6
// import Carousel from 'react-elastic-carousel';//A7
// import { Container } from 'react-bootstrap';//A8
// import { colors } from './ColorCode';//A9
// import { useSelector, useDispatch } from 'react-redux';//A10
// import { showModel } from './redux/user/userAction';//A11 
// import Item from './Item';

// //A13
// const Home = () => {
//     const [show, setShow] = useState(false);//A14
//     const [subService, setSubService] = useState([{id : 1, name : 'test', image : 'test'}]);//A15
//     const [select, setSelect] = useState(false);
//     const [selectId, setSelectId] = useState('0');

//     const model = useSelector(state => state);//A16
//     const dispatch = useDispatch();//A17

//     const breakPoint = [
//       { width: 1, itemsToShow: 1 },
//       { width: 550, itemsToShow: 2},
//       { width: 768, itemsToShow: 4},
//       { width: 1200, itemsToShow: 4}
//     ];//A12
    
//     const breakPoint2 = [
//       { width: 1, itemsToShow: 1 },
//       { width: 550, itemsToShow: 1},
//       { width: 768, itemsToShow: 1},
//       { width: 1200, itemsToShow: 1 }
//     ];//A12

//     const breakPoints = [
//       { width: 1, itemsToShow: 1 },
//       { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//       { width: 768, itemsToShow: 4, itemsToScroll: 4 },
//       { width: 1200, itemsToShow: 4, itemsToScroll: 4 }
//     ];

//     var getHeight = function (elem) {
//       elem.style.display = 'block'; // Make it visible
//       var height = elem.scrollHeight + 'px'; // Get it's height
//       elem.style.display = ''; //  Hide it again
//       return height;
//     };

//     //A18 start
//     function checkService(id){
//       console.log(id);
//       const length = serviceDatas.length;//A18-1
//       let i;
//       const elem = document.getElementById('subServicecarousel');
//       if(show === false){
//         for(i = 0; i < length; i++){
//           if(i === id){
//               setSelectId(i.toString());
//               setShow(true);
//               setSubService(subServiceDatas);
//               let height = getHeight(elem); // Get the natural height
//               elem.classList.add('is-visible'); // Make the element visible
//               elem.style.height = height; // Update the max-height

//               // Once the transition is complete, remove the inline max-height so the content can scale responsively
//               window.setTimeout(function () {
//                   elem.style.height = '';
//                   setSelect(true);
//               }, 350);
//           }
//           else{
//             document.getElementById(i).style.display="none";
//           }
//         }
//       }
//       else{
//         for(let i = 0; i < length; i++){
//           if(i === id){
//             setSelectId('1');
//             setSelect(false);
//             setShow(false);
//             // Give the element a height to change from
//             elem.style.height = elem.scrollHeight + 'px';

//             // Set the height back to 0
//             window.setTimeout(function () {
//                 elem.style.height = '0';
//             }, 1);

//             // When the transition is complete, hide it
//             window.setTimeout(function () {
//                 elem.classList.remove('is-visible');
//             }, 1000);
//           }
//           else{
//             document.getElementById(""+i+"").style.display="inline";
//           }
//         }
//       }
//     }
//     //A18 stop

//     //A19 start
//     function openService(id) {
//       if(model.login === false){
//         dispatch(showModel())
//       }
//       else{
//         alert('You are login in')
//       }
//     }
//     //A19 stop

//     //A20 start
//     return(
//         <>
//           <Nav />{/** A20-1 */}
//           <Container className="mt-3">
//             <Container className="mt-3 text-center p-3" style={{ backgroundColor : colors.first }}>
//               <h3>Our Services</h3>
//             </Container>
//             <br /><br />
            
//             {/**A20-2 start */}
//             <Container className="mt-5" style={{ display : select ? 'none':'block' }}>
//               <Carousel 
//                 breakPoints={breakPoint}
//                 pagination={false} 
//                 transitionMs={1000} 
//               >
//               {serviceDatas.map(item =>
//                 <Item key={item['id']} id={item['id'].toString()} onClick={() => checkService(item['id'])}>
//                   <Service name={item['name']} image={select ? item['image2']:item['image']} />
//                 </Item>
//               )}
//               </Carousel>
//             </Container>
//             {/**A20-2 stop*/}
//             <Container className="mt-5" style={{ display : select ? 'block':'none' }}>
//               <Carousel 
//                 breakPoints={breakPoint2}
//                 pagination={false} 
//                 transitionMs={1000} 
//               >
//                 <Item onClick={() => checkService(serviceDatas[selectId]['id'])}>
//                   <Service 
//                     name={serviceDatas[selectId]['name']} 
//                     image={select ? serviceDatas[selectId]['image2']:serviceDatas[selectId]['image']} 
//                   />
//                 </Item>
//               </Carousel>
//             </Container>

//             {/**A20-3 start*/}
//             <Container id="subServicecarousel" className="mt-5 toggle-content .show-slow">
//               <Carousel breakPoints={breakPoints}>
//                 {subService.map(items => 
//                     <Item key={items['id']} id={items['id'].toString()} onClick={() => openService(items['id'])}>
//                       <Service name={items['name']} image={items['image']} subServices={100}/>
//                     </Item>
//                 )}
//               </Carousel>
//             </Container>
//             {/**A20-3 stop*/}

//             <br /><br />
//             <Container className="mt-5 text-center p-3" style={{ backgroundColor : colors.first }}>
//               <h3>Our Product</h3>
//             </Container>
//             <br />

//             {/**A20-4 start */}
//             <Container className="mt-5 text-center">
//               <PlateForm />
//             </Container>
//             {/**A20-4 stop */}
//             <br /><br />
//           </Container>
//         </>
//     )
//     //A20 stop
// }

// export default Home;

import React, { useState} from 'react';//A1
import Nav from './components/homeComponents/navComponents/Nav';//A2
import Service from './components/homeComponents/servicesComponents/Service';//A3
import PlateForm from './components/homeComponents/plateformComponents/PlateForm';//A4
import { serviceDatas } from './list';//A5
import { subServiceDatas } from './subServices';//A6
import Carousel from 'react-elastic-carousel';//A7
import { Container } from 'react-bootstrap';//A8
import { colors } from './ColorCode';//A9
import { useSelector, useDispatch } from 'react-redux';//A10
import { showModel } from './redux/user/userAction';//A11 
import Item from './Item';

//A13
const Home = () => {
    const [show, setShow] = useState(false);//A14
    const [subService, setSubService] = useState([{id : 1, name : 'test', image : 'test'}]);//A15
    const [select, setSelect] = useState(false);
    const [selectId, setSelectId] = useState('0');

    const model = useSelector(state => state);//A16
    const dispatch = useDispatch();//A17

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
    function checkService(id){
      console.log(id);
      const length = serviceDatas.length;//A18-1
      let i;
      const elem = document.getElementById('subServicecarousel');
      if(show === false){
        for(i = 0; i < length; i++){
          if(i === id){
              setSelectId(i.toString());
              setShow(true);
              setSubService(subServiceDatas);
              let height = getHeight(elem); // Get the natural height
              elem.classList.add('is-visible'); // Make the element visible
              elem.style.height = height; // Update the max-height

              // Once the transition is complete, remove the inline max-height so the content can scale responsively
              window.setTimeout(function () {
                  elem.style.height = '';
                  setSelect(true);
              }, 350);
              return;
          }
        }
      }
      else{
        for(let i = 0; i < length; i++){
          if(i === id){
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
            return;
          }
        }
      }
    }
    //A18 stop

    //A19 start
    function openService(id) {
      if(model.login === false){
        dispatch(showModel())
      }
      else{
        alert('You are login in')
      }
    }
    //A19 stop

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
                <Item key={item['id']} id={item['id'].toString()} onClick={() => checkService(item['id'])}>
                  <Service name={item['name']} image={select ? item['image2']:item['image']} />
                </Item>
              )}
              </Carousel>
          </Container>
        )
      }
    }

    //A20 start
    return(
        <>
          <Nav />{/** A20-1 */}
          <Container className="mt-3">
            <Container className="mt-3 text-center p-3" style={{ backgroundColor : colors.first }}>
              <h3>Our Services</h3>
            </Container>
            <br /><br />
            {showCarousel()}
{/*** -----------------------------------------------------------------------------------------------------  */}
            {/**A20-3 start*/}
            <Container id="subServicecarousel" className="mt-5 toggle-content .show-slow">
              <Carousel breakPoints={breakPoint}>
                {subService.map(items => 
                    <Item key={items['id']} id={items['id'].toString()} onClick={() => openService(items['id'])}>
                      <Service name={items['name']} image={items['image']} subServices={100}/>
                    </Item>
                )}
              </Carousel>
            </Container>
            {/**A20-3 stop*/}

            <br /><br />
            <Container className="mt-5 text-center p-3" style={{ backgroundColor : colors.first }}>
              <h3>Our Product</h3>
            </Container>
            <br />

            {/**A20-4 start */}
            <Container className="mt-5 text-center">
              <PlateForm />
            </Container>
            {/**A20-4 stop */}
            <br /><br />
          </Container>
        </>
    )
    //A20 stop
}

export default Home;