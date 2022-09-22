import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';


function MedicinAdmin(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleadd=(values)=>{
    setOpen(false);
    console.log(values);
    formik.resetForm();
  }

  let schema = yup.object().shape({
    name: yup.string().required("please enter name"),
    Price: yup.number().required("please enter Price"),
    Qnt: yup.string().required("please enter Quntity"),
    expiry: yup.string().required("please enter expiry"),

  });


  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: '',
      Price: '',
      Qnt: '',
      expiry: ''
    },
    onSubmit: values => {
      handleadd(values);
    },
  });

  const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;

  return (
    <div>
      <h1>MedicinAdmin</h1>

      <br />

      <div>
        <Button variant="outlined" onClick={handleClickOpen}>MedicinAdmin</Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>MedicinAdmin</DialogTitle>
          <Formik Values={formik}>
            <Form onSubmit={handleSubmit}>
              <DialogContent>
                <TextField

                  margin="dense"
                  id="name"
                  name="name"
                  label="Add Medicin"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p>{errors.name && touched.name ? errors.name : ''}</p>
                <TextField

                  margin="dense"
                  id="Price"
                  name="Price"
                  label="Price"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p>{errors.Price && touched.Price ? errors.Price : ''}</p>

                <TextField
                  margin="dense"
                  id="Qnt"
                  name="Qnt"
                  label=" Quntity"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p>{errors.Qnt && touched.Qnt ? errors.Qnt : ''}</p>
                <TextField
                  margin="dense"
                  id="expiry"
                  name="expiry"
                  label="Expiry"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p>{errors.expiry && touched.expiry ? errors.expiry : ''}</p>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Add Medicin</Button>
                </DialogActions>
              </DialogContent>
            </Form>
          </Formik>
        </Dialog>
      </div>
    </div>

  );
}

export default MedicinAdmin;