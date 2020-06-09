import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./form";

export default class task extends Component {
  render() {
    return (
      <div>
        <Form addPerson={this.props.addPerson} />
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Task List</h5>

            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Task Name</th>
                  <th scope="col">Duration</th>
                </tr>
              </thead>

              <tbody>
                {this.props.state.task.map((task) => {
                  return (
                    <tr key={task.name}>
                      <td>{task.name}</td>
                      <td>{task.duration}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
