import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';


function ListAppointment(props) {

    const [data, setData] = useState([]);

    const history = useHistory();

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("apt"));
        setData(localData);
    }

    useEffect(() => {
        getData();
    }, [])
    

    const handledelete = (id) => {
        let localdata = JSON.parse(localStorage.getItem("apt"));
        let data = localdata.filter((l) => l.id !== id);
        console.log(localdata, id);
        localStorage.setItem("apt", JSON.stringify(data));
        history.push("Appointment")
    }

    
    const handlededit = (data) => {
        console.log(data);

        history.push("Appointment",data)

    }


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
                                        <b>phone:</b>{d.phone}<br />
                                        <b>date:</b>{d.date}<br />
                                        <b>Email:</b>{d.email}<br />
                                        {d.department}<br />
                                        {d.Gender}<br />
                                        {d.Hobby}<br />
                                        <button onClick={() => handlededit(d)}>Edit</button>
                                        <button onClick={() => handledelete(d.id)}>Delete</button>
                                    </CardSubtitle>
                                    <br></br>
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