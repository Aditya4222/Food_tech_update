import React from "react";
import { Alert, Input, Label, Table } from "reactstrap";

const FinishedGoodInv = () => {
  return (
    <div className="table-responsive">
      <Table>
        <thead>
          <tr>
            <th scope="col" className="text-center">
              <div>
                {/* <Input type="checkbox" name="items_grp" id="items_grp" /> */}
              </div>
            </th>
            <th scope="col">{"Name"}</th>
            <th scope="col">{"Price"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{/* <Input type="checkbox" name="items_grp" /> */}</td>
            <td>{"Coffee"}</td>
            <td>{"USD 2.5"}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FinishedGoodInv;
