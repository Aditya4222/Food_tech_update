import React from "react";
import { Input, Label, Table } from "reactstrap";

const FoodSymbols = () => {
  return (
    <div className="table-responsive">
      <Table>
        <tbody>
          <tr>
            <th>
              <div className="checkbox p-0 pl-3">
                <Input id="dafault-checkbox1" type="checkbox" />
                <Label className="mb-0" for="dafault-checkbox1">
                  {"Vegetarian"}
                </Label>
              </div>
            </th>
            <td>
              <div className="checkbox p-0 pl-3">
                <Input id="dafault-checkbox2" type="checkbox" />
                <Label className="mb-0" for="dafault-checkbox2">
                  {"Non vegetarian"}
                </Label>
              </div>
            </td>
            <td>
              <div className="checkbox p-0 pl-3">
                <Input id="dafault-checkbox3" type="checkbox" />
                <Label className="mb-0" for="dafault-checkbox3">
                  {"Spicy"}
                </Label>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default FoodSymbols;
