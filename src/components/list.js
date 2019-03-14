import React from "react";
import Item from "./Item";
import uuid from "uuid";
const List = props => (
  <>
    {props.todos.map(res => {
      return (
        <li key={uuid()}>
          {" "}
          <Item data={res} />{" "}
        </li>
      );
    })}
  </>
);

export default List;
