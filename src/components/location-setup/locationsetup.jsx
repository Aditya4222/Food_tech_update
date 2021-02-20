import React, { Fragment } from "react";
import Breadcrumb from "../../layout/breadcrumb";
import { Container, Row, Col, Card, Button } from "reactstrap";
import SettingBtn from "../foodTech-settings-button/SettingButton";
import {Link} from "react-router-dom";

const Locationsetup = () => {
  return (
    <Fragment>
      <Container fluid={true}>
        <Breadcrumb parent="Home" title="Location" />

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" style={{float: 'right'}} color="primary" className="float-right" >Add Location</Button>
            </div>
    
        {/* SETTINGS MENU */}
        <Container>
          <Row>
            <Col lg={3} md={4} sm={12}>
              <Link to ="/app/location-setup/locationsetting">
              <Card>
              <SettingBtn
                  text="India 
                        Maharashtra,pune"
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

export default Locationsetup;
