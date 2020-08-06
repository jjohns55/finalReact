import React, { Fragment, useState } from "react";
import torchgif from "./Torch_Gif.gif";
import campfire from "./campfire.gif"
export const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  const addItem = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: item.slice(),
    };

    const newList = [...list];
    newList.push(newItem);
    setList(newList);
    setItem("");
  };

  const deleteItem = (id) => {
    const newList = [...list];
    const updatedList = newList.filter((item) => item.id !== id);

    setList(updatedList);
  };
  return (
    <Fragment>
        <img src={campfire}></img>
      <h1>Quest List</h1>
      <h3>Add a Quest...</h3>
      <br />
      <input
        type="text"
        placeholder="Typest thy Quest..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button
        className="add-btn btn-floating"
        onClick={() => addItem()}
        disabled={!item.length}
      >
        <i> + </i>
      </button>
      <br /> <br />
      <ul>
        {list.map((item) => {
          return (
              
            <li class="thelist" key={item.id}>
              {item.value}
              <button
                className="float"
                onClick={() => deleteItem(item.id)}
              >
                <i>x</i>
              </button>
              
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default Todo;