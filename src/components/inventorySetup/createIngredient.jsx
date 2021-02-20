import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row,CardHeader, Col, Card,CardBody,Button,CardFooter,Form,Table,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from "reactstrap";
import GoBack from "../menu_setup/menuComponents/GoBack";
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'

const Create_Ingredient = (props) => {
                    const [modal, setModal] = useState(false);
                    const toggle = () => setModal(!modal);
  return (
    <Fragment>
<Container fluid={true}>
<Breadcrumb parent="Home" title=" Create Ingredient" />
{/* TOP PROFILE */}
        <Container>
       <h2  style={{padding:"15px", color:"#a927f9", display:"inline-block"}}className="f-w-100"> 
              <i><GoBack goToPath="/app/ingredient_Sub_Recipes" /></i>
           Create Ingredient</h2>
            <div>
                  </div>       
                    <Row>
          <Col xl="12">
          <Card>
              <Form className="form theme-form">
                <CardBody>
                  <Row>
                  <Col md={8} xs={12}>
                  <FormGroup className="row">
                  <label className="col-form-label col-sm-3 pt-0">
                    {"Ingrident Type"}
                  </label>
                  <div className="radio radio-primary ml-4">
                    <Input
                      type="radio"
                      name="radio1"
                      id="radio1"
                      value="option1"
                      defaultChecked
                    />
                    <Label for="radio1">
                      {Option} {"Ingredient"}
                    </Label>
                  </div>
                  <div className="radio radio-primary ml-4">
                    <Input
                      type="radio"
                      name="radio1"
                      id="radio2"
                      value="option1"
                    />
                    <Label for="radio2">
                      {Option} {"Sub Recipe"}
                    </Label>
                  </div>
                
                </FormGroup>
                  
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Name"}</Label>
                        <Col sm="9">
                          <Input placeholder="eg. Chicken" className="form-control" type="text" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Code"}</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" placeholder="eg. 1001" />
                        </Col>
                      </FormGroup>
                      <FormGroup className="row ">
                        <Label className="col-sm-3 col-form-label">{"Description"}</Label>
                        <Col sm="9">
                          <textarea className="form-control" rows="5" cols="5" placeholder="Max characters 200"></textarea>
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Category"}</Label>
                        <Col sm="6">
                        <select  className="form-control" >
                        <option  className="form-control" >Select Category</option>
                        <option  className="form-control" value="Salad Dressing">Salad Dressing</option>
                        <option   className="form-control" value="coconut">Parsley Salad Dressing</option>
                        <option  className="form-control" value="mango">Oil</option>         
                        </select>
                          
                       
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Measurement Unit"}</Label>
                        <Col sm="6">
                        <select  className="form-control" >
                        <option  className="form-control" >Select Measurement Unit</option>
                        <option  className="form-control" value="Kg">Kg</option>
                        <option   className="form-control" value="coconut">tbsb</option>
                        <option  className="form-control" value="mango">gm</option>         
                        </select>
                        </Col>
                      </FormGroup>
                      <br></br>
                      <div> <h4>Purchasing Details</h4></div>
                     <br></br>
                      <FormGroup className="row">
                    
                        <Label className="col-sm-3 col-form-label">{"Buying Unit"}</Label>
                        <Col sm="6">
                        <div style={{paddingRight:"10px"}} className="checkbox checkbox-dark">
                          <Input className="form-control"  placeHolder="eg. Bundle,Box,Sack" type="text" />
                        </div>

                        </Col>
                        
                      </FormGroup>
                  
                      <FormGroup className="row " >
                        <Label className="col-sm-3 col-form-label">{"Kg ="}</Label>
                        <Col sm="9">
                     <Input className="form-control" type="text" >   <span>  gms</span> </Input>
                        </Col>
                      </FormGroup>
                     

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Net gms ="}</Label>
                        <Col sm="9">
                          <Input className="form-control" type="text" /> gms
                        </Col>
                      </FormGroup>

                     

                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Suppliers"}</Label>
                        <Col sm="9">
                      
                          <FormControl className="form-control digits"  type="text" placeholder="Search" />
                        </Col>
                      </FormGroup>

                      <Form className="needs-validation" noValidate="" >
                  <div className="form-row">
                    <Col md="3 mb-3">
                      <Label htmlFor="validationCustom01">{"Supplier Name"}</Label>
                      <Input className="form-control"  type="text" placeholder="Supplier name"  />
             
                    </Col>
                    <Col md="3 mb-3">
                      <Label htmlFor="validationCustom02">{"Price"}</Label>
                      <InputGroup>
                      <Input className="form-control" type="number" placeholder="Price"  />
                      <InputGroupAddon addonType="append"><InputGroupText>{"USD"}</InputGroupText></InputGroupAddon>
                       
                      </InputGroup>
                    
                      
                    </Col>
                    <Col md="3 mb-3">
                      <Label htmlFor="validationCustomUsername">{"Default"}</Label>
                      <InputGroup>
                      <Input className="form-control" name="userName" type="text"   />
                       
                      </InputGroup>
                    </Col>
                  </div>
                  </Form>

                     
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Last Buying Unit Price"}</Label>
                        <Col sm="9">
                          <h6 >-</h6>
                        </Col>
                      </FormGroup>
                      <FormGroup className="row">
                        <Label className="col-sm-3 col-form-label">{"Tax On Purchase"}</Label>
                        <Col sm="3">
                        <InputGroup>
                      <Input className="form-control" type="number" placeholder="0.0"  />
                      <InputGroupAddon addonType="append"><InputGroupText>{"%"}</InputGroupText></InputGroupAddon>
                       
                      </InputGroup>
                        </Col>
                      </FormGroup>

                      <FormGroup className="row">
                      <div className="table-responsive">
                                <Table bordered hover>
                                    <thead>
                                        <tr>
                                           
                                            <th scope="col">{"Location"}</th>
                                            <th scope="col">{"Opening Balance"}</th>
                                            <th scope="col">{"ReOrder Level"}</th>
                                            <th scope="col">{"Track Inventory ?"}</th>
                                          
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">{"Manhattan"}</th>
                                            <td>   
                                            <Form className="needs-validation" noValidate="" >
                  <div className="form-row">
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustom01">{"Box"}</Label>
                      <Input className="form-control"  type="text"  />
             
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustom02">{"Bundle"}</Label>
                      <InputGroup>
                      <Input className="form-control" type="text"  />
                       
                      </InputGroup>
                    
                      
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustomUsername">{"Piece"}</Label>
                      <InputGroup>
                      <Input className="form-control" name="userName" type="text" />
                       
                      </InputGroup>
                    </Col>
                  </div>
                  </Form>
                  </td>
                                            <td>
                                            <Form className="needs-validation" noValidate="" >
                                            <div className="table-responsive">
                                            <Col md="6 mb-6">
                      <Label htmlFor="validationCustomUsername">{"Piece"}</Label>
                      <InputGroup>
                      <Input className="form-control" type="text" />
                       
                      </InputGroup>
                    </Col>
                  </div>
                  </Form>             
                 
                                            </td>
                                            <td>
                                            <Col style={{PaddingBottom:"10px"}} md="6 mb-6">
                                                                <Input className="form-control" type="Checkbox" defaultChecked />
                                                                </Col>

                                            </td>
                                          
                                        </tr>
                                        <tr>
                                            <th scope="row">{"Universal City Walk"}</th>
                                            <td>
                                            <Form className="needs-validation" noValidate="" >
                  <div className="form-row">
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustom01">{"Box"}</Label>
                      <Input className="form-control"  type="text"  />
             
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustom02">{"Bundle"}</Label>
                      <InputGroup>
                      <Input className="form-control" type="text"  />
                       
                      </InputGroup>
                    
                      
                    </Col>
                    <Col md="4 mb-3">
                      <Label htmlFor="validationCustomUsername">{"Piece"}</Label>
                      <InputGroup>
                      <Input className="form-control" name="userName" type="text" />
                       
                      </InputGroup>
                    </Col>
                  </div>
                  </Form>
                                            </td>
                                            <td>    <Form className="needs-validation" noValidate="" >
                                            <div className="table-responsive">
                                            <Col md="6 mb-6">
                      <Label htmlFor="validationCustomUsername">{"Piece"}</Label>
                      <InputGroup>
                      <Input className="form-control" type="text" />
                       
                      </InputGroup>
                    </Col>
                  </div>
                  </Form>             </td>
                                            <td>
                                            <Col style={{PaddingBottom:"10px"}} md="6 mb-6">
                                                                <Input className="form-control" type="Checkbox"  />
                                                                </Col>
                                            </td>
                                            
                                        </tr>
                                        </tbody>
                                        </Table>
                                        </div>

                                          </FormGroup>        

                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <Col  >

                  <Button size="lg" color="light" style={{ display:"inline-block" ,float: 'left' } }> 
                  Cancel</Button>
                 
                  <Button size="lg" color="success" style={{display:"inline-block",float: 'right' }} onClick={toggle}>
                  Submit</Button>



                    
                  </Col>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
                



           
       
        </Container>
      
      </Container>
    </Fragment>
  );
};

export default  Create_Ingredient;