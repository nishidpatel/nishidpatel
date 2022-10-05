import React from 'react';
// import { date } from 'yup';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Appoiment(props) {


  let consschema, init;

  consschema = {
    name: yup.string().required("please Enter your name"),
    email: yup.string().required("please Enter valid email").email("please Enter email"),
    phone: yup.string().required("Enter your phone"),
    date: yup.string().required("Enter your message").min(6),
    department: yup.string().required("Enter your department"),
    message: yup.string().required("Enter your message")
  }

  init = {
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: '',
  }
  let schema = yup.object().shape(consschema);

  const formik = useFormik({

    initialValues: init,
    validationSchema: schema,
    onSubmit: values => {

      console.log(values);

    },
  });

  const { handleChange, errors, handleSubmit,values, touched, handleBlur  } = formik;

  return (
    <div>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
              blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
              Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
          </div>
          <Formik>
            <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    
                    />
                  <p>{errors.name && touched.name ? <p>{errors.name} </p>: ''}</p>

                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={values.email}
                    />
                  <p>{errors.email && touched.email ? <p>{errors.email} </p>: ''}</p>

                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone} 
                    />
                  <p>{errors.phone && touched.phone ? <p>{errors.phone} </p> : ''}</p>

                  <div className="validate" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="datetime"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                    onBlur={handleBlur}
                    onChange={handleChange} 
                    value={values.date} 
                    />
                  <p>{errors.date && touched.date ? <p>{errors.date} </p> : ''}</p>

                  <div className="validate" />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.department}
                  >
                    <option value>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} onBlur={handleBlur}
                    onChange={handleChange} value={values.message} />
                <p>{errors.message && touched.message ? errors.message : ''}</p>
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Make an Appointment</button></div>
            </Form>
          </Formik>
        </div>
      </section>


    </div>
  );
}

export default Appoiment;