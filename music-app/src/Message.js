import './App.css';
//import { MouseEvent } from "react";

let items = ["AA","AAA","AAAA","AAAAA"]

const getMessage=()=> items.length===0 && "No items found!"

const handleClick=(event,item)=> {
    console.log(item+" clicked at coordinates "+event.clientX+", "+event.clientY)
    console.log("potato")
}

export const Message=()=> {
    return (
      <>
      <h1 className="Header">List</h1>
      {getMessage()}
      <ul>
        {items.map((item) => (
        <li
          key={item}
          onClick={(event) => handleClick(event,item)}
        >{item}</li>))}
      </ul>
      <ul>
        {items.map((item) => (<li key ={item}>{item.length}</li>))}
      </ul>
      </>
    );
}

export default Message;