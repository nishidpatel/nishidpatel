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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



function MedicinAdmin(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState([]);
  const [dopen, setdopen] = React.useState(false);
  const [did, setdid] = React.useState(false);
  const [Update,setUpdate]=useState(false)


  const getData = () => {
    let localData = JSON.parse(localStorage.getItem('Medicin'));
    if(localData !== null){
      setData(localData);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
    setUpdate(false);
    formik.resetForm();
  };

  const handleDelete = (data) => {
    setdopen(true)
    setdid(data.id)
  }

  const handelDeleteData = () => {
    let localData = JSON.parse(localStorage.getItem("Medicin"))
    let Ddata = localData.filter((l) => l.id !== did)

    localStorage.setItem("Medicin", JSON.stringify(Ddata))
    setData(Ddata)
    setdopen(false)

    console.log(Ddata);
  }
  const handleClose = () => {
    setOpen(false);
    Update(false);
  };

  const handleedit = (data) =>{
    setOpen(true)
    console.log(data);
    formik.setValues(data);
    setUpdate(true);
  }




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
    formik.resetForm();
    getData();
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
      if (Update) {
        handleupdateData(values)
      }
      else{
        handleadd(values);
      }
      
    },
  });

  const handleupdateData =(values) =>{
    const localData = JSON.parse(localStorage.getItem("Medicin"))
    let uData = localData.map((l) => {
      if (l.id == values.id ){
        return values
      }else{
        return l;
      }
    })
    setData(uData);
    localStorage.setItem("Medicin",JSON.stringify(uData))
    handleClose();
  }


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
    {
      field: '',
      headerName: 'Action',
      width: 90,
      renderCell: (params) => (
        <>
          <IconButton aria-label="delete" onClick={() => handleDelete(params.row)}>
            <DeleteIcon />
          </IconButton>

          <IconButton aria-label="edit" onClick={() => handleedit(params.row)}>
            <EditIcon />
          </IconButton>
        </>
      )
    },

  ];


  const { handleChange, errors, handleSubmit, values, touched, handleBlur } = formik;

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
                  value={values.name}
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
                  value={values.Price}
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
                  value={values.Qnt}
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
                  value={values.expiry}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <p>{errors.expiry && touched.expiry ? errors.expiry : ''}</p>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">{Update ? "Update" : "Add"}</Button>
                </DialogActions>
              </DialogContent>
            </Form>
          </Formik>
        </Dialog>
        <Dialog open={dopen} onClose={handleClose}>
          <DialogTitle>Delete Medicindata</DialogTitle>
          <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button onClick={() => handelDeleteData()}>YES</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>

  );
}

export default MedicinAdmin;