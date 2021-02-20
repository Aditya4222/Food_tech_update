import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";

const ListProducts = () => {
  return (
    <div className="table-responsive">
      <Table>
        <thead>
          <th scope="col">{"Product Information"}</th>
          <th scope="col">{"Price"}</th>
        </thead>
        <tbody>
          <td>
            <Row>
              <Col md={4} xs={5}>
                <img
                  src="/api/company_logo.jpeg"
                  alt="product_img"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col xs={5}>
                <h4>{"ITEM NAME"}</h4>
              </Col>
            </Row>
          </td>
          <td>
            <Row className="justify-content-end">
              <Col md={3} xs={6}>
                <p className="my-auto">{"2.00"}</p>
              </Col>
              <Col md={5} xs={6} className="p-0">
                <div className="d-flex flex-column mb-0">
                  <Card className="text-center px-1 py-3 mb-0 txt-info">
                    <i className="fa fa-chevron-circle-down"></i>
                  </Card>
                  <Button color="info" className="btn-pill mt-2">
                    {"Edit"}
                  </Button>
                </div>
              </Col>
            </Row>
          </td>
        </tbody>
      </Table>
    </div>
  );
};

export default ListProducts;
