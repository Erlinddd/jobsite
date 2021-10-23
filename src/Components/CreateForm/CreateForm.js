import React,{useState} from "react";
import {useForm} from 'react-hook-form'
import {Form,Row,Col,Button} from 'react-bootstrap'

import makeAnimated from 'react-select/animated';
import axios from 'axios'
import {withRouter,useHistory} from 'react-router-dom';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"

toast.configure()
const animatedComponents = makeAnimated();
const CreateForm = (props) => {
   
    


    const {register,handleSubmit,errors}=useForm();
    let history = useHistory();

    const onSubmit=(data)=>{
       axios.post("http://localhost:8000/company",data)
       .then((result)=>{
        toast.success("You created new job site",2000)
        history.push('/',2000)
       })
    }

 const cancel=()=>{
     history.push("/")
 }
    
    return (
        <motion.div 
    initial={{x:'-100vh'}}
    animate={{x:0}}
    transition={{type:'spring',stiffness:120}}
  >

<div className="container">

        <form autocomplete="on"  className="form" onSubmit={handleSubmit(onSubmit)}>
           
            <div>
<h2   style={{backgroundColor:"#8926EB",marginTop:"40px",color:"white"}} className="mb-0">
     Add New Jobsite
</h2>


<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label style={{float:"left"}}>Name</Form.Label>
   <Form.Control  {...register('name', { required: true })} name="name" placeholder="Start typing to project name" /> 
  </Form.Group>
 



  <Row>
    <Col sm={9}> 
    <Form.Label style={{float:"left"}}>Category</Form.Label>
    <Autocomplete
        multiple
        id="size-small-outlined-multi"
        size="small"
        options={top6}
        getOptionLabel={(option) => option.title}
        {...register('category')}
        renderInput={(params) => (
            <TextField 
            name="category"
            {...register('category')}
            {...params} label="Select the Category" placeholder="Select the category" />
          
        )}
      /> 
 
      </Col>

      <Col sm={3}>
      <Form.Label style={{float:"left"}}>Status</Form.Label>
      <select label="select"   className="form-control slct" {...register('status', { required: true })} >
       
        <option value="In Progress">In Progress</option>
                
        <option value="Completed">Completed </option>
           
        <option value="On Hold">On Hold </option>
           
       


      </select>
      </Col>
      </Row>
      <div className="btn-position">

      <Button onClick={cancel} size="lg"  variant="secondary">Cancel</Button> { }
      <Button    size="lg" type="submit" variant="primary">Save</Button>
      </div>
      
      </div>

   



        </form>
        </div>
        </motion.div>
      );
}
 




export default withRouter(CreateForm)


const top6=[
    {
        title:"Shed"
    },
    {
        title:"Scaffold"
    },
    {
        title:"System Scaffold"
    },
    {
        title:"Shoring"
    },
    {
        title:"Stair Tower"
    }
   
]