import { Card } from 'react-bootstrap'

const Services = (props) => {
  return (
    <>
        <Card className="shadow btn" style={{ backgroundColor: 'white', borderRadius : props.subServices ? '100%':'0px' }}>
          <Card.Body>
            <img
              style={{ width: 100, height: 60 }}
              src={props.image}
              alt={props.name}
              title={props.name}
            />
          </Card.Body>
        </Card>
    </>
  )
}

export default Services;