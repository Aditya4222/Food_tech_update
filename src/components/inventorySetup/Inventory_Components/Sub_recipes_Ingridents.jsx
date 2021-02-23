import React from "react";
import { Alert, Input, Label, Table,Form,InputGroupText} from "reactstrap";
import { Container, Row, Col, Card,CardBody,CardHeader,Button, Modal, ModalHeader, ModalFooter,FormGroup, ModalBody,InputGroup,InputGroupAddon } from "reactstrap";
import {  Search} from 'react-feather';
import FormControl from 'react-bootstrap/FormControl'
const Sub_Recipes_Ingreidents = () => {
  return ( 
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
  );
};

export default Sub_Recipes_Ingreidents;