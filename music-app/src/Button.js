import './App.css';
import React from "react";
import Alert from './Alert';
import { useState } from "react";

let alertText = 'text from Button cmp'

//const Button=({text,onClickDef})=> {
const Button=({text})=> {

    const [alertVis,setAlertVis] = useState(false)

    return (
      <>
      {
      alertVis &&
        <Alert
          text = {alertText}
          onClose = {() => setAlertVis(false)}
          dismiss = {true}
        />
      }
      <div
        className={'btn btn-' + (text === 'secondary' ? text : 'primary')}
        onClick={() => {
            //onClickDef(event.clientX,event.clientY)
            setAlertVis(true)
        }}
      >
        {text}
      </div>
      </>
    );
}

export default Button;