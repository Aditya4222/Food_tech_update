import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card,CardBody,CardHeader,Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import {Link } from "react-router-dom";

import FormControl from 'react-bootstrap/FormControl'


import { InputGroup, InputGroupAddon, Input } from 'reactstrap';


const Upload_Ingridents= (props) => {
                    const [modal, setModal] = useState(false);
                    const toggle = () => setModal(!modal);
                    return (
                      <Fragment>
                  <Container fluid={true}>
                   <Breadcrumb parent="Home" title=" Upload Ingridents" />
                  
                      
                  
                  
                          {/* TOP PROFILE */}
                          <Container>
                         
                                
                                    <h2  style={{padding:"15px", color:"#a927f9", display:"inline-block"}} className="f-w-100">
                                     <i class="fa fa-arrow-left" aria-hidden="true"></i>Upload Ingridents</h2>
                                    
                          
                                      <Row style={{textAlign :"center"}}>
                            <Col style={{textAlign :"center"}} xl="12">
                              <Card style={{textAlign :"center"}}>
                            
                                <CardBody  style={{textAlign :"center"}} >
                                <br></br>
                                <Card style={{textAlign :"center" ,backgroundColor:"#f8f9fa"}}>
                                <h5>Please select the CSV/Exel file you want to batch upload</h5>
                              
                                <br></br>
                                <br />
                                <br></br>
                                <Col md="12" style={{textAlign :"center" }}>
                                <FormControl  style={{textAlign :"center" }} type="file" placeholder="Search" className="mr form-control"  />
                                
                                <br></br>
                                <Button size="lg" color="success" style={{display:"inline-block",float: 'right' }} onClick={toggle}>
                          Upload</Button>
                          <br></br>
                          </Col>
                               </Card>

                               <p>Not Sure about the format ?<Link to = "#">DownLoad Our Sample CSV File.</Link> </p>
                               <br />
                                <Card style={{textAlign :"center" ,backgroundColor:"#f8f9fa"}}>
                                <Col md="9" style={{textAlign :"center" }}>
                                <h6 style={{textAlign :"center" }}><i style={{color:"#7366ff"}}class="fa fa-download" aria-hidden="true"></i><Link to = "#">DownLoad all ingredient as CSV File.</Link> </h6>
                          </Col>
                               </Card>
                          
                                </CardBody>
                              </Card>
                            </Col>
                          </Row>
                                  
                  
                  
                  
                             
                         
                          </Container>
                        
                        </Container>
                      </Fragment>
                    );
                  };
                  
                  export default   Upload_Ingridents;