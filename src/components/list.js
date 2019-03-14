import React from "react";
import Item from "./Item";
const List = props => (
  <>
    {props.todos.map(res => {
      return (
        <li key={res}>
          {" "}
          <Item data={res} />{" "}
        </li>
      );
    })}
  </>
);

export default List;
