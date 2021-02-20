import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card,CardBody,CardHeader,Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import {Link } from "react-router-dom";
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';



const MeasurementUnit = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
<Container fluid={true}>
 <Breadcrumb parent="Home" title="Measurement Units" />

    


        {/* TOP PROFILE */}
        <Container>
       
              
                  <h2  style={{padding:"15px", color:"#a927f9", display:"inline-block"}}className="f-w-100"> <i class="fa fa-arrow-left" aria-hidden="true"></i>
                  Measurement  Units</h2>
                
                  <Button color="success" style={{display:"inline-block",float: 'right' }} onClick={toggle}><i class="fa fa-plus " aria-hidden="true"></i> 
                  Add Measurement Unit</Button>
                 
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader    toggle={toggle}>{'Ingredint Category'}</ModalHeader>
                        <ModalBody>
                        <h5  style={{color:"#a927f9"}} >Measurement Unit Name </h5>
                        <InputGroup  size="lg">
                     
                     
                   
                          <Input placeholder="name" />
                       
                      </InputGroup>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="danger" onClick={toggle}>{'Close'}</Button>
                        <Button color="success" onClick={toggle}>{'Save'}</Button>
                        </ModalFooter>
                    </Modal>
       
                    <Row>
          <Col xl="12">
            <Card>
              <CardHeader>
              <h5>{"Name"}</h5>    
              </CardHeader>
              <CardBody>
              <div className="todo">
                  <div className="todo-list-wrapper">
                    <div className="todo-list-container">
                      <div className="mark-all-tasks">
                        <div className="mark-all-tasks-container">
                       
                            <span className="mark-all-btn move-down" id="mark-all-incomplete" role="button">
                              <span className="btn-label">{"Mark all as Incomplete"}</span>
                              <span className="action-box"><i className="icon"><i className="icon-check"></i></i>
                              </span>
                            </span>
                        </div>
                      </div>
                      <div className="todo-list-body">
                        <ul id="todo-list">
                        
                        <li className={"task "}  >
                                <div className="task-container">
                                    <h4 className="task-label">{"Kg"}</h4>
                                    <span className="task-action-btn">
                                        <span className="action-box large delete-btn" title="Delete Task"  >
                                            <i className="icon"><i style={{color:"red"}} class="fa fa-trash-o" aria-hidden="true"></i></i></span>
                                        <span className="action-box large complete-btn" title="Mark Complete" >
                                            <i className="icon"><i  style={{color:"#51bb25"}}class="fa fa-pencil-square-o" aria-hidden="true"></i></i>
                                        </span>
                                    </span>
                                </div>
                            </li>
                            
                        </ul>
                      </div>
                      </div>
                      </div>
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

export default MeasurementUnit;