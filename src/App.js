import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./task";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
      duration: [],
    };
  }

  addPerson = (name, duration) => {
    this.setState((prevState) => ({
      task: [...prevState.task, { name, duration }],
      duration: [...prevState.duration, duration],
    }));
  };

  play = () => {
    let len = this.state.duration.length;
    let task = this.state.duration;
    let duration = [];
    for (let i = 0; i < len; i++) {
      duration.push(task[i] * 1);
    }

    for (let i = 0; i < duration.length; i++) {
      for (let j = 0; j < len; j++) {
        if (duration[j] > duration[j + 1]) {
          let tmp = duration[j];
          duration[j] = duration[j + 1];
          duration[j + 1] = tmp;
        }
      }

      console.log(duration.length);
    }
    for (let i = 0; i < duration.length; i++) {
      let div = document.createElement("div");
      div.id = "task";
      div.className = "red";
      div.style.height = duration[i] + 20 + "px";
      div.innerHTML = "task which is- " + duration[i] + " seconds";
      div.style.width = "100%";
      console.log(div);
      document.getElementById("sort").appendChild(div);
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <h4 className="center">Shortest Job First</h4>
        </div>
        <div className="row center">
          <div className="col-sm-2 col-md-6 col-lg-6">
            <button className="btn-1 btn-success mb-2" onClick={this.play}>
              Play
            </button>
            <div className="card">
              <div id="sort" className="card-body">
                <h5 className="card-title">Sort Task</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-2 col-md-4 col-lg-6">
            <Task state={this.state} addPerson={this.addPerson} />
          </div>
        </div>
      </div>
    );
  }
}
