import { date } from 'yup';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setUpdate, Update } from '@mui/icons-material';


function Appoiment(props) {

  const [usedata, setusedata] = useState(false);

  const history = useHistory();

  useEffect(() => {
    console.log(props.location.state);

    if (props.location.state !== null) {
      console.log(props.location.state);
      formik.setValues(props.location.state);
      setusedata(true);
    }
  }, [])

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


  let consschema, init;


  consschema = {
    name: yup.string().required("please Enter your name")
      .min(2, "Mininum 2 characters")
      .max(30, "Maximum 30 characters")
      .matches(
        /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
        'please enter valid name'
      ),
    email: yup.string().required("please Enter valid email").email("please Enter email"),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10).max(10),
    date: yup.string().required("Please Enter Date.").matches(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/, "Enter Date in Format."),
    department: yup.string().required("Enter your department"),
    message: yup.string().required("Enter your message").min(2).max(50),
    Hobby: yup.array().min(1).of(yup.string().required()).required(),
    Gender: yup.string().required("Enter your Gender"),
  }

  const handleadd = () => {
    let localdata = JSON.parse(localStorage.getItem("apt"));
    // console.log(localdata);
    let id = Math.floor(Math.random() * 1000);

    if (localdata === null) {
      localStorage.setItem("apt", JSON.stringify([{ "id": id, ...values }]));
    } else {
      localdata.push({ "id": id, ...values });
      localStorage.setItem("apt", JSON.stringify(localdata));
    }
    formik.resetForm();

    history.push("/listappointment");
  }

  const Updatedata = (data) => {
    const localdata = JSON.parse(localStorage.getItem("apt"));

    let uData = localdata.map((l) => {

      if (l.id == data.id) {
        return data;
      } else {
        return l;
      }
    })

    localdata.setItem("apt", JSON.stringify(uData));
    history.replace();
    setusedata(false);
    history.push("/listappointment")
  }


  init = {
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    message: '',
    Gender: '',
    Hobby: [],
  }

  let schema = yup.object().shape(consschema);

  const formik = useFormik({

    initialValues: init,
    validationSchema: schema,
    onSubmit: values => {
      if (Update) {
        Updatedata(values);
      } else {
        handleadd(values);
      }

    },
  });

  const { handleChange, errors, handleSubmit, values, touched, handleBlur } = formik;

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
        <div>
          <div>
            <NavLink to={"/ListAppointment"}>ListAppointment</NavLink>
          </div>
        </div><br/>
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

                  <p>{errors.name && touched.name ? <p>{errors.name} </p> : ''}</p>

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
                  <p>{errors.email && touched.email ? <p>{errors.email} </p> : ''}</p>

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
                <textarea

                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  defaultValue={""}
                  onBlur={handleBlur}
                  onChange={handleChange} value={values.message}

                />
                <p>{errors.message && touched.message ? <p>{errors.message} </p> : ''}</p>
              </div>

              <div>
                <label><b>Gender:-</b></label>
                <input type="radio" name="Gender" value={"Male"} checked={values.Gender === "Male"} onBlur={handleBlur} onChange={handleChange}></input>Male
                <input type="radio" name="Gender" value={"Femel"} checked={values.Gender === "Femel"} onBlur={handleBlur} onChange={handleChange}></input>Femel
                <input type="radio" name="Gender" value={"Other"} checked={values.Gender === "Other"} onBlur={handleBlur} onChange={handleChange}></input>Other

                <p>{errors.Gender && touched.Gender ? <p>{errors.Gender}</p> : ''}</p>

              </div>

              <div className="text-center">
                <>
                  <label><b>Hobby:-</b></label><br />
                  <input type="checkbox" name="Hobby" value={"cricket"} checked={values.Hobby.some((h) => h === "cricket")} onBlur={handleBlur} onChange={handleChange} />cricket


                  <input type="checkbox" name="Hobby" value={"Traveling"} checked={values.Hobby.some((h) => h === "Traveling")} onBlur={handleBlur} onChange={handleChange} />Traveling


                  <input type="checkbox" name="Hobby" value={"Reading"} checked={values.Hobby.some((h) => h === "Reading")} onBlur={handleBlur} onChange={handleChange} />Reading


                  <input type="checkbox" name="Hobby" value={"Music"} checked={values.Hobby.some((h) => h === "checkbox")} onBlur={handleBlur} onChange={handleChange} />Music


                </>
                <p>{errors.Hobby && touched.Hobby ? <p>{errors.Hobby}</p> : ''}</p>
              </div>

              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">{usedata ? "Update an Appointment" : "Make an Appointment"}</button></div>
            </Form>
          </Formik>
        </div>
      </section>


    </div>
  );
}

export default Appoiment;