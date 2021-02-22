import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card,CardBody,CardHeader,Button, Modal, ModalHeader, ModalFooter, ModalBody,InputGroupText} from "reactstrap";
import {Link } from "react-router-dom";
import GoBack from "../menu_setup/menuComponents/GoBack";
import { Home, Folder, Clock, Star, Search, AlertCircle, Trash2, Database, Grid, Upload, PlusSquare } from 'react-feather';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Table } from 'reactstrap';
import { useHistory } from "react-router-dom";

const  Adding_Finished_Group= (props) => {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
<Container fluid={true}>
 <Breadcrumb parent="Home" title="Finished Goods" />

    


        {/* TOP PROFILE */}
        <Container>
        <Row>
          <Col md={4} className="d-flex flex-row">
         <h4 style={{padding:"10px", color:"#a927f9", display:"inline-block"}}>
          <i><GoBack goToPath="/app/inventory-Home" /></i>
          Finished Goods
          </h4>
          </Col>
          <Col md={8} className="d-flex flex-row justify-content-end">
          
   
          <Button className="btn-pill my-auto mx-md-3" color="success"
           style={{display:"inline-block",float: 'right' }} 
           onClick={() => history.push("/app/Create_Finished_Good")}
             >
          <i class="fa fa-plus " aria-hidden="true"></i> 
          Add Finished Goods</Button>
         
          <Form   className="btn-pill my-auto mx-md-2" style={{float: 'right' }}>
               <InputGroup>
              <FormControl type="text" placeholder="Search Menu Item" className="mr" />
              <InputGroupAddon addonType="append"><InputGroupText>{<Search />}</InputGroupText></InputGroupAddon>
              </InputGroup>
              </Form>
           </Col>
        </Row>
     
       <div>
       <Col lg={12}>
       <Table>
       
      <thead>
        <tr>
          <th> Name</th>
          <th>Unit Name</th>
          <th>Cost/Unit(USD) Supplier</th>
        </tr>
      </thead>
  
      </Table>
      </Col>
       </div>
    
                    <Row>

          <Col md={12} xs={12} className="d-flex flex-column">
            <Card>
              <CardBody>
              <br></br>
                    <h4>No Finished Goods found on Inventory</h4>
            
                  <p>You are not tracking any of your finished goods item.To start serch an item and add that to inventory</p>  
                  <br></br>                   
              </CardBody>
            </Card>
          </Col>
        </Row>
                



           
       
        </Container>
      
      </Container>
    </Fragment>
  );
};

export default Adding_Finished_Group;