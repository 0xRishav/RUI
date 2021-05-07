import React from "react";
import { List } from "../../components";

function Lists() {
  return (
    <div className="ListsContainer container">
      <h2 className="component-title">Lists</h2>
      <div className="component-wrapper">
        <List spaced />
        <List />
      </div>
    </div>
  );
}

export default List;
