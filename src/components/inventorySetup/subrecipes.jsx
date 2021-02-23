import React, { useState, Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row,CardHeader, Col, Card,CardBody,Button,CardFooter,Form,Table,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from "reactstrap";
import GoBack from "../menu_setup/menuComponents/GoBack";
import FormControl from 'react-bootstrap/FormControl'
import Dropdown from 'react-bootstrap/Dropdown'
import {Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Sub_Recipes_Ingreidents from "./Inventory_Components/Sub_recipes_Ingridents"
import {  Search} from 'react-feather';

const Sub_Recipes = (props) => {
                    const [modal, setModal] = useState(false);
                    const toggle = () => setModal(!modal);
                    const history = useHistory();
  return (
       <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Create Ingredient" />
        <Row>
          <Col>
            <Col className="d-flex flex-md-row flex-column">
              <GoBack goToPath="/app/ingredient_Sub_Recipes"/>
              <h2  style={{padding:"15px", color:"#a927f9", display:"inline-block"}}className="f-w-100">
              Create Ingredient </h2>
            </Col>
          </Col>
        </Row>
        <Card>
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
                      onClick={() => history.push("/app/Create_Ingredient")}
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
                      value="option"
                      onClick={() => history.push("/app/Sub_Recipes")}
                      defaultChecked
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
              
              </Col>
            </Row>
          </CardBody>
        </Card>
     
        {/*Sub Recipies Ingrident*/}
        <Card className="">
          <CardHeader>
            <h3>{"Inventory"}</h3>
          </CardHeader>
          <CardBody>
          <div className="table-responsive">
      <Form md="12">
      
               <InputGroup>
              <FormControl type="text" placeholder="Search Ingredient,then hit enter to add" className="mr" />
              <InputGroupAddon addonType="append"><InputGroupText>{<Search />}</InputGroupText></InputGroupAddon>
              </InputGroup>
              </Form>
              <br></br>
    <Table>
      <thead>
        <tr>
          <th>No</th>
          <th>Ingredint</th>
          <th>Unit Name</th>
          <th>Cost/Unit</th>
          <th>Qty</th>
          <th>Sub Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td scope="row">1</td>
          <td>Lemon Juice</td>
          <td>tbsp</td>
          <td>0.250 USD</td>
          <td>  <Col md="3 mb-3">
                    <span><Input className="form-control"  type="text"  />tsb</span>
              </Col></td>
          <td>1.500 USD</td>
          <td><i className="icon"><i style={{color:"red"}} class="fa fa-trash-o" aria-hidden="true"></i></i></td>
        </tr>

        <tr>
          <th scope="row">2</th>
          <td>Lemon Juice</td>
          <td>tbsp</td>
          <td>0.250 USD</td>
          <td>  <Col md="3 mb-3">
          <span><Input className="form-control"  type="text"  />tsb</span>
              </Col></td>
          <td>1.500 USD</td>
          <td><i className="icon"><i style={{color:"red"}} class="fa fa-trash-o" aria-hidden="true"></i></i></td>
        </tr>

        <tr>
          <th scope="row">3</th>
          <td>Lemon Juice</td>
          <td>tbsp</td>
          <td>0.250 USD</td>
          <td>  <Col md="3 mb-3">
          <span><Input className="form-control"  type="text"  />tsb</span>
              </Col></td>
          <td>1.500 USD</td>
          <td><i className="icon"><i style={{color:"red"}} class="fa fa-trash-o" aria-hidden="true"></i></i></td>
        </tr>

        <tr>
          <th scope="row">4</th>
          <td>Lemon Juice</td>
          <td>tbsp</td>
          <td>0.250 USD</td>
          <td>  <Col md="3 mb-3">
          <span><Input className="form-control"  type="text"  />tsb</span>
              </Col></td>
          <td>1.500 USD</td>
          <td><i className="icon"><i style={{color:"red"}} class="fa fa-trash-o" aria-hidden="true"></i></i></td>
        </tr>
       
      </tbody>
    </Table>

    <div>
    <Col md="3 mb-6">
                      <Label htmlFor="validationCustomUsername">{"Yield"}</Label>
                      <InputGroup>
                      <Input className="form-control" type="text" />
                        </InputGroup>
                      </Col>
</div>
<br></br><div>
<Col md="8 mb-6">
                      <FormGroup  className="row">
                        <Label className="col-sm-2 col-form-label"> <h6>Total:</h6></Label>
                        <Col sm="7">
                          <h6>25.500 USD</h6>
                        </Col>
                      </FormGroup>     
                      </Col> 

    </div>

    </div>
    </CardBody>
        </Card>
        {/* FOOTER SAVE/CANCEL */}
        <Card className="px-3 py-2">
          <div className="d-flex flex-row">
            <Button color="light" className="btn-pill">
              {"Cancel"}
            </Button>
            <Button color="info" className="btn-pill ml-auto">
              <i className="fa fa-save"></i>&nbsp;{"Save"}
            </Button>
          </div>
        </Card>
        {/* FOOTER SAVE/CANCEL END */}
      </Container>
    </Fragment>
  );
};
       
export default  Sub_Recipes;