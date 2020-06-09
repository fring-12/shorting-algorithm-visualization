import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const duration = form.elements["duration"].value;
    const name = form.elements["name"].value;
    this.props.addPerson(name, duration);
    form.reset();
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          className="input_task"
          id="name"
          type="text"
          defaultValue=""
          placeholder="Task Name..."
        />
        <input
          className="input_task"
          id="duration"
          type="number"
          defaultValue=""
          placeholder="Duration..."
        />
        <button className="btn-1 btn-success" type="submit">
          Add Task
        </button>
      </form>
    );
  }
}

export default Form;
