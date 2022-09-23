import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

function MedicinAdmin(props) {
  const [open, setOpen] = React.useState(false);
  const [data,setData] = useState ([]);

  const localData =() => {
    let localData = JSON.parse(localStorage.getItem('Medicin'));
    setData(localData);
  }

  useEffect(() => {
    localData();
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleadd = (values) => {
    let localData = JSON.parse(localStorage.getItem("Medicin"))

    let id = Math.floor(Math.random() * 1000);

    let data = { id: id, ...values }

    console.log(localData, data);

    if (localData === null) {
      localStorage.setItem("Medicin", JSON.stringify([data]))
    } else {
      localData.push(data);
      localStorage.setItem("Medicin", JSON.stringify(localData))

    }

    setOpen(false);
    // console.log(values);
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
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'Price', headerName: 'Price', width: 130 },
    {
      field: 'Qnt',
      headerName: 'Qnatity',
      type: 'number',
      width: 90,
    },
    {
      field: 'expiry',
      headerName: 'Expiry',
      type: 'number',
      width: 90,
    },
    
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


  const { handleChange, errors, handleSubmit, touched, handleBlur } = formik;

  return (
    <div>
      <h1>MedicinAdmin</h1>

      <br />

      <div>
        <Button variant="outlined" onClick={handleClickOpen}>MedicinAdmin</Button>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
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