import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { motion } from "framer-motion"


toast.configure()


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }



export default function HomePage() {
 const [repo,setRepo]=useState([])




const getRepo=()=>{
    axios.get('http://localhost:8000/company')
    .then((response)=>{
        console.log("data that coming",response);
        const myRepo=response.data;
        setRepo(myRepo);
        toast("Welcome to the site app")
    })
}

  useEffect(()=>getRepo(),[])
  return (
    <motion.div 
    initial={{x:'-100vh'}}
    animate={{x:0}}
    transition={{type:'spring',stiffness:120}}
  >


      <div className="container">

      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>JOB SITE NAME</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {repo.map((row) => (
        
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            
                
              <TableCell component="th" scope="row">
 
                 <Link to={"/" + row.id}>
                   {row.name}
                   </Link>
              </TableCell>
                
              <TableCell  className="status" align="right" > <p>{ row.status}</p></TableCell>
           
            </TableRow>

          ))}
   
        </TableBody>
      </Table>
    </TableContainer>

    <Link to="/create"><Button  className="create-button" size="lg" variant="primary">Create</Button></Link>
    </div>
          
    </motion.div>
  );
}
