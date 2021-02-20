import React from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const settingButton = ({ icon, text, onClick }) => {
  return (
    <Button
      type="button"
      className="btn-square"
      size="lg"
      outline
      color="info"
      onClick={onClick}
      style={{ height: "170px", borderRadius: "10px" }}
    >
      <i className={icon}></i>
      <br />
      {text}
    </Button>
  );
};

settingButton.defaultProps = {
  icon: "fa fa-map-marker fa-2x m-b-10",
  text: "BUTTON TEXT",
};

settingButton.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export const MenuCard = ({ text, value, color }) => {
  return (
    <Button
      className="btn-square"
      size="lg"
      outline
      color="info"
      style={{ height: value || "100px", borderRadius: "10px" }}
    >
      {text}
    </Button>
  );
};
export default settingButton;
