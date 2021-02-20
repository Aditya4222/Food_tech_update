import React from "react";
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const ItemCategory = ({ modal, toggle }) => {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{"Add New Category"}</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label htmlFor="exampleFormControlInput1">{"Catogery Name"}</Label>
            <Input
              className="form-control"
              type="text"
              placeholder="Category Name"
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-pill" color="info" onClick={toggle}>
            {"Add Category"}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ItemCategory;
