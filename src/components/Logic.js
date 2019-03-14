import React, { Component } from "react";
import List from "./list";

import { Consumer } from "../api/api";
class Logic extends Component {
  state = {
    value: ""
  };
  onChange = e => {
    e.preventDefault();
    if (e.target.value) {
      return this.setState({ value: e.target.value });
    }
    e.target.value = "";
  };
  logic = (dispatch, e) => {
    e.preventDefault();
    // let value = e.target.elements.todo.value.trim();
    let { value } = this.state;
    if (value) {
      // this.setState(prv => {
      //   return {
      //     todos: prv.todos.concat([value])
      //   };
      // });
      dispatch({ type: "ADD", payload: value });
      this.setState({ value: "" });
    } else {
      alert("Add item ");
    }
    console.log(value);
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { todos, dispatch } = value;

          return (
            <div>
              <List todos={todos} />
              <>
                <form onSubmit={this.logic.bind(this, dispatch)}>
                  <input
                    className="form-control form-control-lg  "
                    type="text"
                    name="todo"
                    onChange={this.onChange}
                    placeholder="Type new todo"
                  />
                  <button className="btn  btn-block btn-lg bc" type="submit">
                    Add new To-do
                  </button>
                </form>
              </>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Logic;
