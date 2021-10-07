import Service from './Service';
import { serviceDatas } from '../../../list';
import { Col, Row } from 'react-bootstrap';

const Lists = () => {
    const DataList = serviceDatas.map(items => (
        <Col sm={3} key={items.id} className="mt-3">
            <Service id={items.id} name={items.name} image={items.image} />
        </Col>        
    ));
    return (
        <Row>
            {DataList}
        </Row>
    )
}

const AllServices = () => {
    return (
        <>
            <Lists />
        </>
    );
};

export default AllServices;