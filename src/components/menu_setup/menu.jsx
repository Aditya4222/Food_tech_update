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
} from "reactstrap";
import GoBack from "./menuComponents/GoBack";
import ItemsNotFound from "./menuComponents/ItemsNotFound";
import RefreshPOSMenu from "./menuComponents/RefreshPOSMenu";
import ItemCategory from "./menuComponents/ItemCategory";
import ItemsList from "./menuComponents/ListItems";

const Menu = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const history = useHistory();
  const isProductList = true;
  const isPOSMenuUpdate = true;
  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Settings" />
        {/* TOP SECTION */}
        <Row>
          <Col md={4} className="d-flex flex-row">
            <GoBack goToPath="/app/settings" />
            <h1>Menu</h1>
          </Col>
          <Col md={8} className="d-flex flex-row justify-content-end">
            <Button
              type="button"
              onClick={() => history.push("/app/settings/menuSetup/uploadMenu")}
              className="btn-pill my-auto"
              color="#a927f9"
              style={{ height: "fit-content" }}
            >
              <i className="fa fa-upload"></i>&nbsp;
              {"Upload Menus"}
            </Button>
            <Button
              type="button"
              onClick={toggle}
              className="btn-pill my-auto mx-md-2"
              color="light"
              style={{ height: "fit-content" }}
            >
              <i className="fa fa-plus"></i>&nbsp;
              {"Add Menu Category"}
            </Button>
            <ItemCategory modal={modal} toggle={toggle} />
            <Button
              type="button"
              className="btn-pill my-auto"
              color="info"
              onClick={() =>
                history.push("/app/settings/menuSetup/addNewMenuItem")
              }
              style={{ height: "fit-content" }}
            >
              <i className="fa fa-plus"></i>&nbsp;
              {"Add New Menu Item"}
            </Button>
          </Col>
        </Row>
        {/* TOP SECTION END */}
        {/* PRODUCT LIST SECTION */}
        {isPOSMenuUpdate ? <RefreshPOSMenu /> : ""}
        <Row className="mt-2">
          <Col md={9} xs={12} className="d-flex flex-column">
            <Input className="form-control" placeholder="Search Menu Items" />
            {isProductList ? <ItemsList /> : <ItemsNotFound />}
          </Col>
          <Col md={3} xs={12} className="d-flex flex-column">
            <ListGroup>
              <ListGroupItem className="bg-dark">
                {"MENU CATEGORIES"}
              </ListGroupItem>
              <ListGroupItem>{"Dapibus ac facilisis in"}</ListGroupItem>
              <ListGroupItem>{"Morbi leo risus"}</ListGroupItem>
              <ListGroupItem>{"Porta ac consectetur ac"}</ListGroupItem>
              <ListGroupItem>{"Vestibulum at eros"}</ListGroupItem>
            </ListGroup>
            <Button className="btn-pill mt-2" color="light">
              <i className="fa fa-plus"></i>&nbsp;
              {"Add Menu Category"}
            </Button>
          </Col>
        </Row>
        {/* PRODUCT LIST SECTION END */}
      </Container>
    </Fragment>
  );
};

export default Menu;
