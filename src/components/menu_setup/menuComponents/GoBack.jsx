import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

const GoBack = ({ goToPath }) => {
  const history = useHistory();
  const goBackHandler = () => history.push(goToPath);
  return (
    <>
      <Button
        className="btn-flat"
        color="light"
        className="mr-2 px-2"
        style={{ height: "fit-content" }}
        onClick={goBackHandler}
      >
        <i className="fa fa-arrow-left fa-2x"></i>
      </Button>
    </>
  );
};

export default GoBack;
