import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        todos: state.todos.filter(res => res !== action.payload)
      };
    case "ADD":
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };

    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    todos: ["goto park ", "cut down a tree", "brush hair"],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
