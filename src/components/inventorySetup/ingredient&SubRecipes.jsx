import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card,CardBody,CardHeader,Button ,InputGroupText} from "reactstrap";
import DropdownButton from 'react-bootstrap/DropdownButton'

import Dropdown from 'react-bootstrap/Dropdown'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import {Link } from "react-router-dom";
import { Home, Folder, Clock, Star, Search, AlertCircle, Trash2, Database, Grid, Upload, PlusSquare } from 'react-feather';

const Ingredint_Sub_Recipes = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
<Container fluid={true}>
<Breadcrumb parent="Home" title="Ingredint & Sub Recipes" />

    


        {/* TOP PROFILE */}
        <Container>
       
              
              <h2  style={{padding:"15px", color:"#a927f9", display:"inline-block"}}className="f-w-100"> <i class="fa fa-arrow-left" aria-hidden="true"></i>
               Ingredint & Sub Recipes </h2>

               <Form  style={{float: 'right' ,paddingRight:"10px",paddingTop:"5px" }}>
               <InputGroup>
              <FormControl type="text" placeholder="Search" className="mr" />
              <InputGroupAddon addonType="append"><InputGroupText>{<Search />}</InputGroupText></InputGroupAddon>
              </InputGroup>
              </Form>
                 <DropdownButton  style={{display:"inline-block",float: 'right', paddingRight:"10px" ,paddingTop:"5px"}} id="dropdown-basic-button" title="All Caegories">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>

              <DropdownButton  style={{display:"inline-block",float: 'right', paddingRight:"10px" ,paddingTop:"5px" }} id="dropdown-basic-button" title="All Types">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>

            
                 
              <div>
              <h5  style={{padding:"15px", color:"#a927f9", display:"inline-block"}}className="f-w-100"> 
               Ingredint & Sub Recipes </h5>
               <Link to="/app/Upload_Ingridents">
               <Button size="sm" className="btn-air "color="primary" style={{display:"inline-block",float: 'right' }} onClick={toggle}><i class="fa fa-upload" aria-hidden="true"></i> 
                    Upload Ingredients</Button>
                    </Link>

                    <Link to ="/app/Create_Ingredient" >
                  <Button  size="sm" color="success" style={{display:"inline-block",float: 'right' }} onClick={toggle}><i class="fa fa-plus " aria-hidden="true"></i>
                  Add Ingredients
                  </Button>
                  </Link>
                  </div>
                    <Row>
          <Col xl="12">
            <Card>
              <CardBody>
             <div>
                       
                      
                                
                    <h3>No Ingriendt Found</h3>
                    <p>You don't have any ingredients yet.To start ,click Add new Ingredient</p>
                    <Link to ="/app/Create_Ingredient" >
                    <Button color="success" onClick={toggle}><i class="fa fa-plus " aria-hidden="true"></i>
                    Add Ingredients
                     </Button>
                     </Link>
                       
                         
                            
                        
                      </div>
                    
                     
              </CardBody>
            </Card>
          </Col>
        </Row>
                



           
       
        </Container>
      
      </Container>
    </Fragment>
  );
};

export default Ingredint_Sub_Recipes;