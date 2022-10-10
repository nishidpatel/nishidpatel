import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
function List({ Data }) {
    return (
        <div className='row'>

            {Data.map((d, i) => {
                return (
                <div className='col-md-4'>
                <Card
                    style={{
                        width: '18rem'                                                          
                    }}                                          
                >
                    <CardBody>
                        <CardTitle tag="h5">
                            {d.name}
                            
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            price={d.price}<br/>
                            



                        </CardSubtitle>
                    </CardBody>
                </Card></div>)
            })}
        </div>
    );
}

export default List;