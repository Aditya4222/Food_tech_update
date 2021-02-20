import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Input,
  ListGroup,
  ListGroupItem,
  CardBody,
} from "reactstrap";
import GoBack from "./menuComponents/GoBack";

const UploadMenu = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Settings" />
        <Row>
          <Col md={7} className="d-flex flex-md-row flex-column">
            <GoBack goToPath="/app/settings/menuSetup" />
            <h1>Upload Menu Items</h1>
          </Col>
        </Row>
        <Row className="mt-4 justify-content-center">
          <Col md={5} xs={12}>
            <Card>
              <CardBody className="">
                <p>{"Please select the CSV/Excel file you want to upload."}</p>
                <Input className="form-control" type="file" />
                <Button className="btn-pill float-right mt-3" color="secondary">
                  {"Upload"}
                </Button>
              </CardBody>
            </Card>
            <Card className="mt-2 p-3">
              <Button className="btn-pill" color="light">
                <i className="fa fa-upload"></i>&nbsp;
                {"Download all items as CSV file"}
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default UploadMenu;
