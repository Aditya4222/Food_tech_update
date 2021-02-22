import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card,CardBody,CardHeader,Button, Modal, ModalHeader, ModalFooter, ModalBody,InputGroupText } from "reactstrap";
import {Link } from "react-router-dom";
import {Search } from 'react-feather';
import GoBack from "../menu_setup/menuComponents/GoBack";
import FormControl from 'react-bootstrap/FormControl'


import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


const Create_Finished_Good = (props) => {
                    const [modal, setModal] = useState(false);
                    const toggle = () => setModal(!modal);
                    return (
                      <Fragment>
                  <Container fluid={true}>
                   <Breadcrumb parent="Home" title="Create Finished Goods" />
                  
                      
                  
                  
                          {/* TOP PROFILE */}
                          <Container>
                         
                                
                                    <h2  style={{padding:"15px", color:"#a927f9", display:"inline-block"}} className="f-w-100">
                                   <i><GoBack goToPath="/app/Adding_Finished_Group" /></i>Create Finished Goods</h2>
                                    
                          
                                      <Row style={{textAlign :"center"}}>
                            <Col style={{textAlign :"center"}}  md={12} xs={12}>
                              <Card style={{textAlign :"center"}}>
                            
                                <CardBody  style={{textAlign :"center", padding:"100px"}} >
                                <br></br>
                                <br />
                            
                                <i  style={{fontSize:"40px",color:"rgb(169, 39, 249)"}} class="fa fa-cutlery" aria-hidden="true"></i>
                                <br></br>
                                <br />
                              
                                <h5>Search the menu item to add as finished good</h5>
                                <br></br>
                                <InputGroup>
                                <FormControl type="text" placeholder="Search" className="mr" />
                                <InputGroupAddon addonType="append"><InputGroupText>{<Search />}</InputGroupText></InputGroupAddon>
                                </InputGroup>
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
                  
                  export default  Create_Finished_Good;