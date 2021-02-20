import React from "react";
import { Button, Card } from "reactstrap";

const RefreshPOSMenu = () => {
  return (
    <Card
      className="p-3 text-center d-flex flex-column mt-2"
      style={{ backgroundColor: "#fceda1" }}
    >
      <p className="txt-danger">
        {
          "Menu item(s) updated. This will not take effect until you refresh POS menu items."
        }
      </p>
      <Button
        className="btn-pill mx-auto"
        color="danger"
        style={{ maxWidth: "fit-content" }}
      >
        <i className="fa fa-refresh"></i>&nbsp;
        {"Refresh"}
      </Button>
    </Card>
  );
};

export default RefreshPOSMenu;
