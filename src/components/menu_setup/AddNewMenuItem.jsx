import React, { Fragment, useState } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { useHistory } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Input,
  ListGroup,
  ListGroupItem,
  CardHeader,
  CardBody,
  FormGroup,
  Label,
} from "reactstrap";
import GoBack from "./menuComponents/GoBack";
import FinishedGoodInv from "./menuComponents/FinishedGoodInv";
import FoodSymbols from "./menuComponents/FoodSymbols";
import ItemsInGroup from "./menuComponents/ItemsInGroup";
import ItemModifires from "./menuComponents/ItemModifires";

const AddNewMenuItem = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Settings" />
        <Row>
          <Col>
            <Col className="d-flex flex-md-row flex-column">
              <GoBack goToPath="/app/settings/menuSetup/" />
              <h1>New Menu Item</h1>
            </Col>
          </Col>
        </Row>
        {/* ADD MENU ITEM FORM SETION */}
        <Card>
          <CardHeader>
            <h2>{"Item Details"}</h2>
          </CardHeader>
          <CardBody>
            <Row>
              <Col md={8} xs={12}>
                <FormGroup className="row">
                  <label className="col-form-label col-sm-3 pt-0">
                    {"Item type"}
                  </label>
                  <div className="radio radio-primary ml-4">
                    <Input
                      type="radio"
                      name="radio1"
                      id="radio1"
                      value="option1"
                    />
                    <Label for="radio1">
                      {Option} {"Regular Item"}
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
                      {Option} {"Grouped Item"}
                    </Label>
                  </div>
                  <div className="radio radio-primary ml-4">
                    <Input
                      type="radio"
                      name="radio1"
                      id="radio3"
                      value="option1"
                    />
                    <Label for="radio3">
                      {Option} {"Combo Item"}
                    </Label>
                  </div>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 col-form-label">{"Name"}</Label>
                  <Col sm="9">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 col-form-label">{"Barcode"}</Label>
                  <Col sm="9">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Barcode"
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 col-form-label">
                    {"Item Code"}
                  </Label>
                  <Col sm="9">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Item Code"
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 col-form-label">
                    {"Default Price"}
                  </Label>
                  <Col sm="9">
                    <Input
                      className="form-control"
                      type="text"
                      placeholder="Default Price"
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 col-form-label">
                    {"Description"}
                  </Label>
                  <Col sm="9">
                    <textarea
                      className="form-control"
                      type="text"
                      placeholder="Description"
                    />
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 col-form-label">
                    {"Item category"}
                  </Label>
                  <Col sm="9">
                    <select
                      name="item_cat"
                      id="item_cat"
                      className="form-control"
                    >
                      <option value="select_item_cat" selected>
                        {"Select Catogery"}
                      </option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup className="row">
                  <Label className="col-sm-3 col-form-label">
                    {"Default Price"}
                  </Label>
                  <Col sm="9">
                    <Input className="form-control" type="file" />
                  </Col>
                </FormGroup>
              </Col>
              <Col md={4} xs={12} className="d-flex flex-column">
                <h3>This item is available at:</h3>
              </Col>
            </Row>
          </CardBody>
        </Card>
        {/* ADD MENU ITEM FORM SETION END */}
        {/* FINISHED GOOD ENV */}
        <Card className="">
          <CardHeader>
            <h2>{"Finished Good Invetory"}</h2>
          </CardHeader>
          <CardBody>
            <FinishedGoodInv />
          </CardBody>
        </Card>
        <Card className="">
          <CardHeader>
            <h2>{"Food Symbols"}</h2>
          </CardHeader>
          <CardBody>
            <FoodSymbols />
          </CardBody>
        </Card>
        <Card className="">
          <CardHeader>
            <h2>{"Items In Group"}</h2>
          </CardHeader>
          <CardBody>
            <ItemsInGroup />
          </CardBody>
        </Card>
        <Card className="">
          <CardHeader>
            <h2>{"Add New Item Modifires"}</h2>
          </CardHeader>
          <CardBody className="text-center">
            <p className="mb-0">{"You don't have modifires at the moment."}</p>
            <br />
            <p className="mt-0">
              {
                "First you need to add group, then your desired modifier or Load any group from the templete."
              }
            </p>
            <div className="d-flex flex-row mt-3 justify-content-center">
              <Button type="button" className="btn-pill mr-2" color="info">
                {"Add Group"}
              </Button>
              <Button type="button" className="btn-pill" color="light">
                {"Load Template"}
              </Button>
            </div>
            <ItemModifires />
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

export default AddNewMenuItem;
