import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, Button } from "reactstrap";
import SettingBtn from "../foodTech-settings-button/SettingButton";
import Navbar from 'react-bootstrap/Navbar'
import GoBack from "../menu_setup/menuComponents/GoBack";
import {Link } from "react-router-dom";
const inventorySetting = () => {
  return (
    <Fragment>
<Container fluid={true}>
        <Breadcrumb parent="Home" title="InventorySetting" />


        {/* TOP PROFILE */}
        <Container>
        
              
                  <h2  style={{padding:"15px", color:"#a927f9"}}className="f-w-100"> <i><GoBack goToPath="/app/inventory-Home" /></i>
                  Inventory Settings</h2>
                
       
        </Container>
        {/* TOP PROFILE END */}
        {/* SETTINGS MENU */}
        <Container>
          <Row>
            <Col lg={3} md={4} sm={12}>
            <Link to ="/app/inventory-Categories" >
              <Card>
                <SettingBtn
                  icon=" fa fa-th-large fa-2x m-b-10"
                  text="Ingredient Categories"
                  
                  
                />
              </Card>
              </Link>
            </Col>
            <Col lg={3} md={4} sm={12}>
            <Link to ="/app/measurement-Unit" >
              <Card>
                <SettingBtn
                  icon="fa fa-tasks fa-2x m-b-10"
                  text="Measurement Units"
                />
              </Card>
              </Link>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-truck fa-2x m-b-10"
                  text="Suppliers"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-bookmark fa-2x m-b-10"
                  text="Global Intern Preferences"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-tags fa-2x m-b-10"
                  text="Inventory Global Settings"
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

export default inventorySetting;