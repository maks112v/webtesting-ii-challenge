import React from "react";
import { Table } from 'reactstrap';

export default ({ ball, strike}) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Ball</th>
          <th>Strike</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-testid="number" >{ball}</td>
          <td data-testid="number" >{strike}</td>
        </tr>
      </tbody>
    </Table>
  );
};
