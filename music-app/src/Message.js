import './App.css';
import { useState } from "react";
//import { MouseEvent } from "react";

//let items = ["AA","AAA","AAAA","AAAAA"]

const getMessage=(items)=> items.length===0 && "No items found!"

const handleClick=(event,item)=> console.log(item+" clicked at coordinates "+event.clientX+", "+event.clientY)
    //console.log("potato")

const Message=({items,heading,parentHandler})=> {
    const [selected, setSelected] = useState(-1)
    return (
      <>
      <h1 className="Header">List {heading}</h1>
      {getMessage(items)}
      <ul>
        {items.map((item, idx) => (
        <li
          className={idx===selected ? 'active' : ''}
          key={item}
          onClick={(event) => {
            handleClick(event,item)
            setSelected(idx)
            parentHandler(item)
          }}
        >{item}</li>))}
      </ul>
      <ul>
        {items.map((item) => (<li key ={item}>{item.length}</li>))}
      </ul>
      </>
    );
}

export default Message;