import React from "react";
import { Row, Col, Card, Input, Button } from "reactstrap";

const ItemModifires = () => {
  return (
    <Row>
      <Col md={4} xs={12}>
        <Card className="p-3">
          <div
            className="d-flex flex-column justify-content-start bg-info mb-1"
            style={{ borderRadius: "inherit" }}
          >
            <h3 className="mb-0">{"Burger Add-Ons"}</h3>
            <p className="mt-0">{"Max: 5"}</p>
          </div>
          <div className="row mt-2">
            <Col xs={7} className="pr-0">
              <Input
                type="text"
                className="form-control"
                placeholder="Search Item Name"
              />
            </Col>
            <Col xs={3} className="px-1">
              <Input
                type="number"
                placeholder="0.00"
                className="form-control"
              />
            </Col>
            <Col xs={2} className="pl-0">
              <Button color="info" className="btn-flat p-0 form-control">
                <i className="fa fa-plus"></i>
              </Button>
            </Col>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemModifires;
