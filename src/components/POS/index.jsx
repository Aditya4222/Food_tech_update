import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, Button, CardBody, CardHeader, Form, FormGroup, Label, Input, Table, InputGroup,InputGroupAddon ,InputGroupText, CardFooter} from "reactstrap";
import {Search} from 'react-feather';
import { MenuCard } from "../foodTech-settings-button/SettingButton";

const settingsHome = () => {



  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="POS" />
       
      

       
        <Card >
          <CardBody>
          <Row>
          <Col md={6}>
          <h4>New Order</h4>
          </Col>
          <Col md={2}>
          <Button color="info" size="lg" block >Add Notes</Button>
          </Col>

          <Col md={2}>
          <Button color="secondary" size="lg" block >Discounts</Button>
          </Col>

          <Col md={2}>
          <Button color="primary" size="lg" block >Place Order</Button>
          </Col>
          </Row>
          </CardBody>
          </Card>
        
        <Row >
          <Col lg={2}>
            <Card style={{height:"70vh"}}>
              <CardHeader style={{ display: "flex", flexFlow: "row", alignContents: "center", justifyContent: "space-between" , }}>
                <h5>Running Orders</h5>
              </CardHeader>

              <CardBody>
                <Row>
                 
              
              <Button outline color="success" size="sm" block >Order A</Button>
    
              <Button outline color="success" size="sm" block >Order A</Button>
          
              <Button outline color="success" size="sm" block >Order A</Button>
            
              <Button outline color="success" size="sm" block >Order A</Button>

                </Row>
              
              </CardBody>


              <CardFooter>
            
              <Button  color="light" size="sm" block >Order Details</Button>
            
              <Button  color="light" size="sm" block >Print KOT</Button>
            
              <Button  color="light" size="sm" block >Print Bill and Settle</Button>
            
              <Button  color="light" size="sm" block >Modify Order</Button>
            
              <Button  color="light" size="sm" block >Kitchen Status</Button>
              </CardFooter>

            </Card>
          </Col>

          <Col lg={4}>
            <Card style={{height:"70vh"}}>
              <CardHeader > 
              <Row>
              <Col sm={4} style={{paddingBottom:"10px"}}>
              <Button outline color="secondary" block >Dine In</Button>
              </Col>
              <Col sm={4} >
              <Button outline color="secondary" block>Take Away</Button>
              </Col>
              <Col sm={4} >
              <Button outline color="secondary" block>Delivery</Button>
              </Col>
              <Col sm={4} >
              <Button outline color="secondary" block>For User</Button>
              </Col>
              <Col sm={4} >
              <Button outline color="secondary"  block>Walk In</Button>
              </Col>
              <Col sm={4} >
              <Button outline color="secondary" block>Table</Button>
              </Col>
              
              </Row>
              </CardHeader>

              <CardBody style={{padding:0}}>
                <Row>
                <Col sm="12">
                        
                            <div >
                                <Table hover responsive className="table-border-horizontal">
                                    <thead>
                                        <tr>
                                            <th scope="col">{"Item"}</th>
                                            <th scope="col">{"Price"}</th>
                                            <th scope="col">{"Quantity"}</th>
                                            <th scope="col">{"Discount"}</th>
                                            <th scope="col">{"Total"}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"Name"}</th>
                                            <td>{"100"}</td>
                                            <td>{"2"}</td>
                                            <td>{"10%"}</td>
                                            <td>{"180"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"Name"}</th>
                                            <td>{"100"}</td>
                                            <td>{"2"}</td>
                                            <td>{"10%"}</td>
                                            <td>{"180"}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">{"Name"}</th>
                                            <td>{"100"}</td>
                                            <td>{"2"}</td>
                                            <td>{"10%"}</td>
                                            <td>{"180"}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                       
                    </Col>
                </Row>
              </CardBody>

              <CardFooter>
                <Row>
                  <Col sm={4}>
                  <Button  color="light" block >Cancel KOT</Button>
                  </Col>
                  <Col sm={4}>
                  <Button  color="light" block >Hold KOT</Button>
                    </Col>
                    <Col sm={4}>
                    <Button  color="light"  block >Confirm Order</Button>
                    </Col>
                </Row>
             
              
             
              </CardFooter>
            </Card>
          </Col>

          <Col lg={6}>
            <Card style={{height:"70vh"}}>
              <CardHeader style={{ display: "flex", flexFlow: "row", alignContents: "center", justifyContent: "space-between" }}>
                <h5>Menu Categories</h5>
                <Form >
                  {/* <FormGroup>
                    <Input className="form-control" type="text" name="item_cat" placeholder="search menu" autoComplete="off" />
                  </FormGroup> */}
                  <InputGroup >
                              
                              <Input className="form-control" type="text" placeholder="Search items"/>
                              <InputGroupAddon addonType="append"><InputGroupText>{<Search />}</InputGroupText></InputGroupAddon>
                            </InputGroup>
                </Form>

              </CardHeader>
              <CardBody>
                <Row>

                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>

                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>

                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>

                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>
                  <Col lg={3} md={4} sm={12}>
                    <Card>
                      <MenuCard
                        text="Name"
                      />
                    </Card>
                  </Col>

                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>


      </Container>
    </Fragment>
  );
};

export default settingsHome;