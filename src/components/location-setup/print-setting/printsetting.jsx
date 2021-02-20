import React, { useState, Fragment } from "react";
import { Container, Row, Col, Card, Nav, NavItem, NavLink, Tabs, TabContainer,TabContent, Button, TabPane,CardBody, CardHeader, CardText, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Jumbotron} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import Breadcrumb from "../../../layout/breadcrumb";

const PrintSetting = (props) => {
  const [VerticleTab, setVerticleTab] = useState('1');
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);



    const history = useHistory()
    const editRedicrectHandler = () => history.push('/app/location-setup/print-setting/edit')
  return (
    <Fragment>
      <Breadcrumb parent="Home" title="Printers And Receipts" />
      <Container fluid="true">
      <Col sm="12" xl="6 xl-100 box-col-12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="3" xs="12">
                    <Nav className="nav flex-column nav-pills">
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '1' ? 'active' : ''} onClick={() => setVerticleTab('1')}>Invoice Template</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '2' ? 'active' : ''} onClick={() => setVerticleTab('2')}>Secondary Printers</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '3' ? 'active' : ''} onClick={() => setVerticleTab('3')}>Printing Rules</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#javascript" className={VerticleTab === '4' ? 'active' : ''} onClick={() => setVerticleTab('4')}>Category Printers</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col sm="9" xs="12">
                    <TabContent activeTab={VerticleTab}>
                      <TabPane className="fade show" tabId="1">
                          {/* INVOICE TEMPLATE */}
                              <Container>
                                <Card>
                                  <CardHeader>
                                  <Row>
                                    <Col md ="6">
                                  <h4>Invoice Template</h4>
                                  </Col>
                                  <Col md ="6">
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="primary" style={{float: 'right'}} color="primary" className="float-right" onClick={toggle} >create new template</Button>
                                <Modal isOpen={modal} toggle={toggle} >
                                        <ModalHeader toggle={toggle}>Add New Invoice Template</ModalHeader>
                                        <ModalBody>
                                        <Form>
                                          <FormGroup>
                                            <Input className="form-control" type="text" />
                                          </FormGroup>
                                        </Form>

                                        </ModalBody>
                                        <ModalFooter>
                                        <Button color="success" onClick={toggle}>Add</Button>
                                        <Button color="success" onClick={toggle}>Add</Button>

                                        </ModalFooter>
                                </Modal>
                                </div>
                                </Col>
                                </Row>
                                </CardHeader>
                                </Card>
                                <Row ClassName="align-items-start">
                                <Col ClassName="col">
                                <Card className="text-center">
                                    <CardHeader>Invoice</CardHeader>
                                    <CardBody>
                                    <CardTitle>Special title treatment</CardTitle>
                                    <CardText>
                                        Customer Name:
                                        Staff:
                                        INV#:


                                    </CardText>
                                    <div className = "btn-showcase">
                                    <Button variant="primary"  color="success"  type="button" onClick={editRedicrectHandler}>Edit</Button>            
                                    <Button variant="primary"  color="danger">Delete</Button>
                                    </div>
                                    </CardBody>
                                </Card>
                                </Col>
                                <Col ClassName="col">
                                <Card className="text-center">
                                    <CardHeader>Invoice Copy</CardHeader>
                                    <CardBody>
                                    <CardTitle>Special title treatment</CardTitle>
                                    <CardText>
                                        Customer Name:
                                        Staff:
                                        INV#:


                                    </CardText>
                                    <div className = "btn-showcase">
                                    <Button variant="primary"  color="success"  type="button" onClick={editRedicrectHandler}>Edit</Button>            
                                    <Button variant="primary"  color="danger">Delete</Button>
                                    </div>
                                    </CardBody>
                                </Card>
                                </Col>
                                <Col ClassName="col">
                                <Card className="text-center">
                                    <CardHeader>Kitchen Slip</CardHeader>
                                    <CardBody>
                                    <CardTitle>Special title treatment</CardTitle>
                                    <CardText>
                                        Customer Name:
                                        Staff:
                                        INV#:


                                    </CardText>
                                    <div className = "btn-showcase">
                                    <Button variant="primary"  color="success"  type="button" onClick={editRedicrectHandler}>Edit</Button>            
                                    <Button variant="primary"  color="danger">Delete</Button>
                                    </div>
                                    </CardBody>
                                </Card>
                                </Col>
                              </Row>
                            </Container>
                            {/* INVOICE TEMPLATE END */}
                      </TabPane>
                      <TabPane tabId="2">
                        <Card>
                          <Container>
                            <CardHeader>
                            <Row>
                              <Col md ="6">
                                <h4>Secondary Printers</h4>
                              </Col>
                              <Col md="6">
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="primary" style={{float: 'right'}} color="primary" className="float-right" onClick={toggle} >Add Secondary Printers</Button>
                                    <Modal isOpen={modal} toggle={toggle} >
                                        <ModalHeader toggle={toggle}>Add new Printer</ModalHeader>
                                        <ModalBody>
                                        <Form>
                                          <FormGroup>
                                            <Input className="form-control" type="text" defaultValue="eg. Kitchen"/>
                                          </FormGroup>
                                        </Form>

                                        </ModalBody>
                                        <ModalFooter>
                                        <Button color="success" onClick={toggle}>Add</Button>
                                        </ModalFooter>
                                    </Modal>
                                </div>
                              </Col>
                              </Row>
                              </CardHeader>
                                <Jumbotron fluid>
                                  <Container>
                                  <h2>No Printers Found</h2>
                                  <h6 className="f-w-100">Add a new one by clicking on Add secondary Printer Button</h6><br/>
                                  <Button variant="primary" color="primary" onClick={toggle} >Add Secondary Printers</Button>
                                    <Modal isOpen={modal} toggle={toggle} >
                                        <ModalHeader toggle={toggle}>Add new Printer</ModalHeader>
                                        <ModalBody>
                                        <Form>
                                          <FormGroup>
                                            <Input className="form-control" type="text" defaultValue="eg. Kitchen"/>
                                          </FormGroup>
                                        </Form>

                                        </ModalBody>
                                        <ModalFooter>
                                        <Button color="success" onClick={toggle}>Add</Button>
                                        </ModalFooter>
                                    </Modal>
                                  </Container>
                                </Jumbotron>
                            </Container>
                            </Card>
                            {/* INVOICE TEMPLATE END */}

                      </TabPane>
                      <TabPane tabId="3">
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                      </TabPane>
                      <TabPane tabId="4">
                        <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
      </Container>
    </Fragment>
  );
};

export default PrintSetting;
