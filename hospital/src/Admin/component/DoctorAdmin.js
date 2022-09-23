import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';


function DoctorsAdmin(props) {
    const [open, setOpen] = React.useState(false);
    const [data, setData] = useState([]);

    const localData = () => {
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

        let localData = JSON.parse(localStorage.getItem("Doctor"))

        let id = Math.floor(Math.random() * 10000);

        let data = { id: id, ...values }

        console.log(localData, data);

        if (localData === null) {
            localStorage.setItem("Doctor", JSON.stringify([data]))
        } else {
            localData.push(data);
            localStorage.setItem("Doctor", JSON.stringify(localData))
        }

        setOpen(false);
        formik.resetForm();
    }



    let schema = yup.object().shape({

        name: yup.string().required('Please Enter name'),
        age: yup.number().required('please Enter your Number'),

    });

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            name: '',
            age: '',
        },

        onSubmit: values => {
            handleadd(values);

        },
    });



    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'age', headerName: 'Age', width: 130 },
       
        
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

    const { handleChange, handleSubmit, errors, touched, handleBlur } = formik;



    return (
        <div>
            <h1>DoctorsAdmin</h1>
            <br />
            <div>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open form dialog
                </Button>
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
                    <DialogTitle>Subscribe</DialogTitle>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit}>
                            <DialogContent>

                                <TextField

                                    margin="dense"
                                    id="name"
                                    name="name"
                                    label="Doctor name"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.name && touched.name ? errors.name : ''}</p>
                                <TextField

                                    margin="dense"
                                    id="age"
                                    name="age"
                                    label="Doctor Number"
                                    fullWidth
                                    variant="standard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <p>{errors.age && touched.age ? errors.age : ''}</p>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button type='submit'>Add</Button>
                                </DialogActions>
                            </DialogContent>


                        </Form>
                    </Formik>
                </Dialog>
            </div>
         </div >

    );
}

export default DoctorsAdmin;