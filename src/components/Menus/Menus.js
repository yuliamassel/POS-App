import React from "react";
import { Col, Card } from "react-bootstrap";
import {numberWithCommas} from '../utils/utils';




const Menus = ({menu , addToCart}) =>{
    return (
        <Col  md={4} xs={6}>
        <Card style={{ border: 'none' }} className=" mt-2  mx-3" onClick={()=> addToCart(menu)}>
          <Card.Img variant="top" src={"assets/img/" + menu.category.nama+"/"+ menu.image}/>
          <Card.Body>
            <Card.Title className="mb-1">{menu.name}</Card.Title>
            <Card.Text className="mb1">
                Rp. {numberWithCommas (menu.price)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
    
  }





// class Menus {menu} extends  Component {
    

//   render() {
//     return (
//       <Col  md={4} xs={6} className="me-4">
//         <Card>
//           <Card.Img variant="top" src="holder.js/100px180" />
//           <Card.Body>
//             <Card.Title>{menu.name}</Card.Title>
//             <Card.Text>
//                 ahsgdkewidn kjhncdlchnwed 
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       </Col>
//     );
//   }
// }

export default Menus;


