import React, { useEffect, useState } from 'react';


function Doctordata(props) {

    const [Data, setData] = useState('');

    let orgdata = props.location.state

    console.log(orgdata);

    const orgData = [

        {
            id: 100,
            image: <img src="../assets/img/doctors/doctors-1.jpg" className="img-doctor" alt />,
            name: 'Atha Smith',
            designation: 'Chief Medical Officer',
            description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.',
        },

        {
            id: 101,
            image: <img src="../assets/img/doctors/doctors-2.jpg" className="img-doctor" alt />,
            name: 'John White',
            designation: 'Anesthesiologist',
            description: 'Aenean ac turpis ante. Mauris velit sapien.',
        },

        {
            id: 102,
            image: <img src="../assets/img/doctors/doctors-3.jpg" className="img-doctor" alt />,
            name: 'Umika Loha',
            designation: 'Cardiology',
            description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.',
        },

        {
            id: 103,
            image: <img src="../assets/img/doctors/doctors-4.jpg" className="img-doctor" alt />,
            name: 'Daimy Smith',
            designation: 'Neurosurgeon',
            description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.',
        },

    ]

    useEffect(() => {
        let Ddata = orgData.find((l) => {
            if (l.id === orgdata.id) {
                setData(l);
            }
        })
    }, [])

    console.log(Data);

    return (


        <section id="doctors" className="doctors">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="member d-flex align-items-start">
                            <div className="pic col-lg-2">{Data.image}</div>
                            <div className="member-info">
                                <h4>{Data.name}</h4>
                                <span>{Data.designation}</span>
                                <p>{Data.description}</p>
                                <h2>
                                    <p className="fs-6"><h5>Chief Medical Officer</h5> </p>
                                    <p className="fs-7"><b>
                                        Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus faucibus accumsan nibh at ullamcorper.
                                        Proin rhoncus hendrerit ipsum, non volutpat augue semper id.
                                        Morbi eget est ultricies urna rutrum mollis.
                                        Aenean laoreet orci ut imperdiet convallis.
                                        Nam at facilisis elit. In sed felis vel velit pulvinar
                                        placerat. Phasellus vel metus accumsan, malesuada ligula
                                        nec, molestie orci. Cras ante lacus, pellentesque et erat
                                        ut, rutrum aliquam ligula.</b> </p>
                                </h2>
                                <div className="social">
                                    <a href><i className="ri-twitter-fill" /></a>
                                    <a href><i className="ri-facebook-fill" /></a>
                                    <a href><i className="ri-instagram-fill" /></a>
                                    <a href> <i className="ri-linkedin-box-fill" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}


export default Doctordata;


