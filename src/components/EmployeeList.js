import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import auth from "../auth";

export default function EmployeeList(props) {
  const users = useSelector((state) => state.user);
  return (
    <div>
      <h3>Welcome to Employee Dashboard !!</h3>
      <Button
        onClick={() => {
          auth.logout(() => {
            props.history.push("/");
          });
        }}
        style={{ marginBottom: "4px" }}
      >
        Logout
      </Button>
      <Table className="table shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>PhoneNo</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
