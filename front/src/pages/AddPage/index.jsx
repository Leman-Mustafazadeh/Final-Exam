import { Button, TextField } from '@mui/material';
import React, { useContext } from 'react'
import {useFormik} from "formik"
import styles from "./index.module.scss"
import Menu from '../../classes/Menu';
import { post } from '../../API';
import { MenuProvider } from '../../context/ContextMenu';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const AddPage = () => {
    const { menu, setMenu } = useContext(MenuProvider)
    const navigate = useNavigate()
    const formik = useFormik ({
        initialValues:{
            name:"",
            title:"",
            number:""
        },
        onSubmit:(values)=>{
            console.log(values);
            const newMenu= new Menu(values.name,values.title,values.number)
            post(newMenu)
            formik.resetForm()
            setMenu((current)=>[...current,newMenu])
            navigate("/")
        }
    })
  return (
<>
<Helmet>
    <meta charSet="utf-8" />
    <title>Add Menu</title>
    <link rel="canonical" href="http://mysite.com/example" />
</Helmet>
    <form  onSubmit={formik.handleSubmit}>
        <h1>ADD PAGE</h1>
        <TextField style={{width:'100%'}}  id="outlined-basic" onChange={formik.handleChange} value={formik.values.name} name='name' label="name" variant="outlined" />
        <TextField  style={{width:'100%'}} id="outlined-basic" onChange={formik.handleChange} value={formik.values.title} name='title' label="title" variant="outlined" />
        <TextField type='number' style={{width:'100%'}}  id="outlined-basic" onChange={formik.handleChange} value={formik.values.number} name='number' label="number" variant="outlined" />
        <Button type='submit' variant="contained">Contained</Button>
    </form>
</>
  )
}

export default AddPage