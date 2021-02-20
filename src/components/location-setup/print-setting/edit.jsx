import React,{useState, Fragment} from "react";
import Breadcrumb from "../../../layout/breadcrumb";
import { Container, Row, Col, Card, Nav, NavItem, NavLink, Tabs, TabContainer,TabContent, Button, TabPane,CardBody, CardHeader, CardText, CardTitle,FormGroup, Label, Input, CardFooter, Form} from 'reactstrap';

const Generalsetting = () => {
  const [BasicTab, setBasicTab] = useState('1');

  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Invoice" />
        <Row>
        <Col md="8" >
            <Card>
              <CardBody>
                <Nav tabs>
                  <NavItem>
                    <NavLink href="#javascript" className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>General Setting</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="#javascript" className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>Header</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#javascript" className={BasicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}>Footer</NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={BasicTab}>
                  <TabPane className="fade show" tabId="1">
                            {/* FORM  */}
                            <Form>
                            <Row>
                              <Col md="12">
                                <Card>
                                  <CardHeader>
                                    <h5>General Setting</h5>
                                  </CardHeader>
                                  <CardBody>
                                    <Row>
                                      <Col md="12">
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">SimpleInput</Label>
                                            <Col sm="9">
                                              <Input  type="checkbox" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Title Label:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Invoice Number Label:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Customer Label:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Server By Label:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row> 


                            <Row>
                              <Col md="12">
                                <Card>  
                                  <CardBody>
                                    <Row>
                                      <Col sm="12">
                                      <FormGroup className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-1" type="checkbox" />
                                            <Label for="inline-1">Show Logo</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-2" type="checkbox"  />
                                            <Label for="inline-2">Show Delivery Address </Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-3" type="checkbox" />
                                            <Label for="inline-3">Show Price</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-4" type="checkbox" />
                                            <Label for="inline-4">Show Modified Items</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-5" type="checkbox" />
                                            <Label for="inline-5">Show Modifiers & Notes</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-6" type="checkbox" />
                                            <Label for="inline-6">Show Combo Items</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-7" type="checkbox" />
                                            <Label for="inline-7">Show Order Notes</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-8" type="checkbox" />
                                            <Label for="inline-8">Has Running Out Text</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-9" type="checkbox" />
                                            <Label for="inline-9">Print Only New Items</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-10" type="checkbox" />
                                            <Label for="inline-10">Show Loyalty</Label>
                                          </div>
                                          <div className="checkbox checkbox-dark">
                                            <Input id="inline-11" type="checkbox" />
                                            <Label for="inline-11">Print Larger</Label>
                                          </div>
                                        </FormGroup>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row>   

                            <Row>
                              <Col md="12">
                                <Card>
                                <CardHeader>
                                    <h5>Invoice Header Section</h5>
                                  </CardHeader>  
                                  <CardBody>
                                    <Row>
                                      <Col sm="12">
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Item:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Qty:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Price:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row>


                            <Row>
                              <Col md="12">
                                <Card>
                                <CardHeader>
                                    <h5>Payment Section</h5>
                                  </CardHeader>  
                                  <CardBody>
                                    <Row>
                                      <Col sm="12">
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Show Breakdown:</Label>
                                            <Col sm="9">
                                              <Input  type="checkbox" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Sub-Total Label:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">Tax Label:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label">To Pay Label:</Label>
                                            <Col sm="9">
                                              <Input  type="Text" />
                                            </Col>
                                      </FormGroup>
                                      </Col>
                                    </Row>
                                  </CardBody>
                                </Card>
                              </Col>
                            </Row>   
                            <CardFooter>
                                      <Button  color="primary" className="mr-1">Submit</Button>
                                      <Button color="light" type="reset">Cancel</Button>
                            </CardFooter>
                      </Form>
                      {/* FORM END */}
                  </TabPane>
                  <TabPane tabId="2">
    {/*FORM START */}                
                    <Form>
                      <Row>
                        <Col>
                        <Card>
                          <CardBody>
                            <Row>
                              <Col sm="12">
                                <FormGroup classname="row">
                                  <Col sm="9">
                                       <Input  type="checkbox" />
                                  </Col>
                                  <Label className="col-sm-9 col-form-label">Show Header</Label>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <FormGroup className="mb-0">
                                  <Input type="textarea" className="form-control"  rows="3"/>
                                </FormGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        </Col>
                      </Row>
                      <CardFooter>
                                      <Button  color="primary" className="mr-1">Submit</Button>
                                      <Button color="light" type="reset">Cancel</Button>
                            </CardFooter>
                    </Form>
{/*FORM END */}
                  </TabPane>
                  <TabPane tabId="3">
{/*FORM START */}                
<Form>
                      <Row>
                        <Col>
                        <Card>
                          <CardBody>
                            <Row>
                              <Col sm="12">
                                <FormGroup classname="row">
                                  <Col sm="9">
                                       <Input  type="checkbox" />
                                  </Col>
                                  <Label className="col-sm-9 col-form-label">Show Footer</Label>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <FormGroup className="mb-0">
                                  <Input type="textarea" className="form-control"  rows="3"/>
                                </FormGroup>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                        </Col>
                      </Row>
                      <CardFooter>
                                      <Button  color="primary" className="mr-1">Submit</Button>
                                      <Button color="light" type="reset">Cancel</Button>
                            </CardFooter>
                    </Form>
{/*FORM END */}
                  </TabPane>
                  <TabPane tabId="4">
                    <p className="mb-0 m-t-30">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <CardHeader>
                <h5>Sample preview</h5>
              </CardHeader>
              <CardBody>
                
              </CardBody>
            </Card>
          </Col>
          </Row>
      </Container>
    </Fragment>
  );
};

export default Generalsetting;
