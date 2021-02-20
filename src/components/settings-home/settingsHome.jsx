import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, Button } from "reactstrap";
import { Image } from "react-bootstrap";
import SettingBtn from "../foodTech-settings-button/SettingButton";

import {Link, useHistory} from "react-router-dom";



const SettingsHome = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Settings" />
        {/* TOP PROFILE */}
        <Container>
          <Card className="bg-gray p-t-25 p-b-25 p-l-25">
            <Row>
              <Col lg={3} md={5} sm={12} className="text-center">
                <Image
                  alt="company_logo"
                  src="/api/company_logo.jpeg"
                  className="border-darken-2 img-fluid"
                  // style={{ maxHeight: "130px", maxWidth: "300px" }}
                />
              </Col>
              <Col
                lg={8}
                md={9}
                sm={12}
                className="d-flex flex-column p-t-5 p-l-25"
              >
                <div className="d-flex flex-row">
                  <h2 className="f-w-100">eatables</h2>
                  <Button
                    className="btn-pill m-t-15 m-l-5"
                    color="danger"
                    size="xs"
                    style={{ height: "fit-content" }}
                  >
                    Edit
                  </Button>
                </div>
                <Row className="m-t-15">
                  <Col
                    sm={3}
                    className="d-flex flex-column border-right border-gray"
                  >
                    <small className="text-muted">{"Telephone"}</small>
                    <p className="text-dark">{"+91 7895637289"}</p>
                  </Col>
                  <Col
                    sm={3}
                    className="d-flex flex-column border-right border-gray"
                  >
                    <small className="text-muted">{"Country"}</small>
                    <p className="text-dark">{"India"}</p>
                  </Col>
                  <Col
                    sm={3}
                    className="d-flex flex-column border-right border-gray"
                  >
                    <small className="text-muted">{"Time Zone"}</small>
                    <p className="text-dark">{"GMT"}</p>
                  </Col>
                  <Col sm={3} className="d-flex flex-column">
                    <small className="text-muted">{"Bussiness Day"}</small>
                    <p className="text-dark">{"12:00 AM"}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Container>
        {/* TOP PROFILE END */}
        {/* SETTINGS MENU */}
        <Container>
          <Row>
            <Col lg={3} md={4} sm={12}>
            <Link to ="/app/location-setup/locationsetup">
              <Card>
                <SettingBtn
                  icon="fa fa-map-marker fa-2x m-b-10"
                  text="Location Setup"
                />
              </Card>
              </Link>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  onClick={() => history.push("/app/settings/menuSetup")}
                  icon="fa fa-cutlery fa-2x m-b-10"
                  text="Menu Setup"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Link to="/app/inventory-Home">
              <Card>
                <SettingBtn
                  icon="fa fa-gears fa-2x m-b-10"
                  text="Inventory Setup"
                />
              </Card>
              </Link>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn icon="fa fa-group  fa-2x m-b-10" text="Staff" />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-cog fa-2x m-b-10"
                  text="Global Settings"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-sitemap fa-2x m-b-10"
                  text="Partner Integrations"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-globe fa-2x m-b-10"
                  text="Sapaad Add-Ons"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-institution  fa-2x m-b-10"
                  text="My Account"
                />
              </Card>
            </Col>
          </Row>
        </Container>
        {/* SETTINGS MENU END */}
      </Container>
    </Fragment>
  );
};

export default SettingsHome;
