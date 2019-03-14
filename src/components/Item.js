import React, { Component } from "react";
import { Consumer } from "../api/api";

class Item extends Component {
  state = {
    lineThrow: ""
  };
  onDelete = (res, dispatch, e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "DELETE", payload: res });
  };
  tick = (name, id, e) => {
    //e.stopPropagation();
    // e.preventDefault();
    if (this.state.lineThrow === "") {
      return this.setState({ lineThrow: name });
    }
    return this.setState({ lineThrow: "" });
  };
  render() {
    const { data } = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <>
              <p
                className="dump"
                onClick={this.onDelete.bind(this, this.props.data, dispatch)}
              >
                <i class="far fa-trash-alt" />
              </p>
              <li
                onClick={this.tick.bind(this, this.props)}
                className={this.state.lineThrow === this.props ? "lt" : "cd"}
              >
                {data}{" "}
              </li>
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Item;
