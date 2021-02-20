import React from "react";
import { Alert, Table } from "reactstrap";

const FinishedGoodInv = () => {
  const isTrackedItem = false;
  return (
    <div className="table-responsive">
      <Table>
        <thead>
          <tr>
            <th scope="col">{"Location"}</th>
            <th scope="col">{"Opening Balance"}</th>
            <th scope="col">{"Record Level"}</th>
          </tr>
        </thead>
        <tbody>
          {isTrackedItem ? (
            <tr>
              <th scope="row">{"1"}</th>
              <td>{"Alexander"}</td>
              <td>{"Orton"}</td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3">
                <Alert color="danger" className="mt-1 text-center">
                  {"This item is not being tracked !!"}
                </Alert>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FinishedGoodInv;
