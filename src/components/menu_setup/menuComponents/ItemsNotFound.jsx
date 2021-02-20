import React from "react";
import { Card, CardBody } from "reactstrap";

const ItemsNotFound = () => {
  return (
    <Card className="mt-4">
      <CardBody>
        <h1>No Items Found</h1>
        <p>
          You don't have any dish yet. To start, click Add New Menu Item or, if
          you want to add category click on Add New Menu Category so that you
          have a better product view.
        </p>
      </CardBody>
    </Card>
  );
};

export default ItemsNotFound;
