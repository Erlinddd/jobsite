
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Form
} from 'devextreme-react/data-grid';
import 'devextreme-react/text-area';
import { Item } from 'devextreme-react/form';
import { employees, states } from './data.js';
import axios from "axios";
import React,{useState} from "react";
import {withRouter,useHistory,useParams} from 'react-router-dom';
import {Button} from 'react-bootstrap'
import { motion } from "framer-motion"


const notesEditorOptions = { height: 100 };
const DataTable=()=> {
  const [post, setPost] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    axios.get(`http://localhost:8000/company/${id}`).then((response) => {
    console.log("Rrr",response.data)  
    setPost(response.data);
    });
  }, []);

  if (!post) return null;
    return (
      <motion.div 
      initial={{x:'-100vh'}}
      animate={{x:0}}
      transition={{type:'spring',stiffness:120}}
    >
  
      <div className="container">

<div className="sidenav">
    <div className="detail-title">{post.name}</div>
   <Button  variant="primary" size="lg">{post.category}</Button> { '   '}
   <Button  variant="primary" size="lg" >{post.category}</Button>
   
  
       </div>
    <div className="asd">

        <DataGrid
          dataSource={employees}
          keyExpr="ID"
          showBorders={true}
        >
          <Paging enabled={false} />
          <Editing
            mode="popup"
            allowUpdating={true}
           
        >
            <Popup    title="Edit Row" showTitle={true} width={700} height={525} />
            <Form>
              <Item itemType="group" colCount={2} colSpan={2}>
       
                <Item dataField="Items" />
                <Item dataField="Quantity"   width={170}  colSpan={2} />
                <Item dataField="Description" editorType="dxTextArea"
                  colSpan={2}   />
            
                <Item
                  dataField="Notes"
                  editorType="dxTextArea"
                  colSpan={2}
                  editorOptions={notesEditorOptions} />
              </Item>
         
             
            </Form>
          </Editing>
       
          <Column   dataField="Nr" />
          <Column dataField="Items" />
          <Column dataField="Quantity" />
          <Column dataField="Description" width={170} />
          <Column dataField="Notes" />
        </DataGrid>
      </div>
      
        
      </div>
      </motion.div>
      
      );

}

export default DataTable;
