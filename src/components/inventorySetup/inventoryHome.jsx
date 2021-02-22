import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, Button } from "reactstrap";
import SettingBtn from "../foodTech-settings-button/SettingButton";
import Navbar from 'react-bootstrap/Navbar'
import {Link } from "react-router-dom";
import GoBack from "../menu_setup/menuComponents/GoBack";



const inventoryHome = () => {
  return (
    <Fragment>
    <Container fluid={true}>
        <Breadcrumb parent="Home" title="InventoryHome" />


        {/* TOP PROFILE */}
        <Container>
        
       
                  <h2  style={{padding:"15px", color:"#a927f9"}}className="f-w-100"> <i> <GoBack goToPath="/app/settings" /></i>Inventory  </h2>
                
       
        </Container>
        {/* TOP PROFILE END */}
        {/* SETTINGS MENU */}
        <Container>
          <Row>
            <Col lg={3} md={4} sm={12}>
              <Card>
                <SettingBtn
                  icon="fa fa-book fa-2x m-b-10"
                  text="Recipes"
                />
              </Card>
            </Col>
            <Col lg={3} md={4} sm={12}>
            <Link to ="/app/ingredient_Sub_Recipes" >
              <Card>
                <SettingBtn
                  icon="fa fa-pie-chart fa-2x m-b-10"
                  text="Ingredients & Sub Recipes"
                />
              </Card>
              </Link>
            </Col>
            <Col lg={3} md={4} sm={12}>
            <Link to ="/app/Adding_Finished_Group">
              <Card>
                <SettingBtn
                  icon="fa fa-truck fa-2x m-b-10"
                  text="Finished Goods"
                />
              </Card>
              </Link>
            </Col>
            <Col lg={3} md={4} sm={12}>
            <Link to ="/app/inventory-Setting" >
              <Card>
                <SettingBtn
                  icon="fa fa-cogs fa-2x m-b-10"
                  text="Inventory Settings" 
                
                />
              </Card>
              </Link>
            </Col>
          
          </Row>
        </Container>
        {/* SETTINGS MENU END */}
      </Container>
    </Fragment>
  );
};

export default inventoryHome;