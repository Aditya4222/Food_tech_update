import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, Button } from "reactstrap";
import SettingBtn from "../foodTech-settings-button/SettingButton";
import {Link} from "react-router-dom";

const Locationsetting = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Settings" />
        <Container>
          <Row>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-building fa-2x m-b-10"
                  text="General Details"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                
              <SettingBtn
                  icon="fa fa-percent fa-2x m-b-10"
                  text="Surcharges And Discount"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-calculator fa-2x m-b-10"
                  text="Tax Rates"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-cutlery fa-2x m-b-10"
                  text="Menu"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-group fa-2x m-b-10"
                  text="Staff"
                />
               </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-th fa-2x m-b-10"
                  text="Dining Section"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Link to ="/app/location-setup/print-setting/printsetting">
              <Card>
              <SettingBtn
                  icon="fa fa-print fa-2x m-b-10"
                  text="Print Setting"
                />
              </Card>
              </Link>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-map-marker fa-2x m-b-10"
                  text="Delivery Areas"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-motorcycle fa-2x m-b-10"
                  text="Delivery Manager"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-desktop fa-2x m-b-10"
                  text="Dispatch Screen"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
              <SettingBtn
                  icon="fa fa-ticket fa-2x m-b-10"
                  text="Token Screen"
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

export default Locationsetting;
