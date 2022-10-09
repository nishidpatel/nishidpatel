import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';


function ListAppointment(props) {
    const [data, setData] = useState([]);

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("apt"));

        // console.log(localData);
        setData(localData);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
              <div className='row'>
            {
                data.map((d, i) => (
                    <div key={i} className='col-md-3'>
                        <Card
                            style={{
                                width: '20rem'
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
                                    <b>phone:</b>{d.phone}<br/>
                                    <b>date:</b>{d.date}
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default ListAppointment;