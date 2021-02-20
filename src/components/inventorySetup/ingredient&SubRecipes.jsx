import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card,CardBody,CardHeader,Button ,InputGroupText} from "reactstrap";
import DropdownButton from 'react-bootstrap/DropdownButton'
import GoBack from "../menu_setup/menuComponents/GoBack";
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


        <Row>
          <Col md={4} className="d-flex flex-row">
            <GoBack goToPath="/app/inventory-Home"/>
            <h3 style={{color:"#a927f9"}}> Ingredint & Sub Recipes</h3>
          </Col>
          <Col md={8} className="d-flex flex-row justify-content-end">
          
            <DropdownButton   className="btn-pill my-auto mx-md-2" style={{display:"inline-block",float: 'right'}} id="dropdown-basic-button" title="All Caegories">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
              <DropdownButton  className="btn-pill my-auto mx-md-2"  style={{display:"inline-block",float: 'right' }} id="dropdown-basic-button" title="All Types">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>

              <Form   className="btn-pill my-auto mx-md-2" style={{float: 'right' }}>
               <InputGroup>
              <FormControl type="text" placeholder="Search" className="mr" />
              <InputGroupAddon addonType="append"><InputGroupText>{<Search />}</InputGroupText></InputGroupAddon>
              </InputGroup>
              </Form>
      
          </Col>
        </Row>

 <br></br>

        <Row>
          <Col md={4} className="d-flex flex-row">
        <h5 style={{color:"#a927f9"}}> Ingredint & Sub Recipes</h5>
          </Col>
          <Col md={8} className="d-flex flex-row justify-content-end">


       
          <Link to ="/app/Create_Ingredient" >
          <Button
           type="button"
           color="success"
            onClick={toggle}>
            <i class="fa fa-plus " aria-hidden="true"></i> 
              {"Add ingridents"}
            </Button>
            </Link>
            
            <Link to="/app/Upload_Ingridents">
            <Button
           type="button"
           color="primary"
            onClick={toggle}>
             <i class="fa fa-upload" aria-hidden="true"></i>
              {"Upload Ingridents"}
            </Button>
            </Link>
            
      
          </Col>
        </Row>
        <br></br>
          <Row>
          <Col md={12} xs={12} className="d-flex flex-column">
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