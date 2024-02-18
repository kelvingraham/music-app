import './App.css';
import React from "react";
//import ReactNode from "react";
import { useState } from "react";

const Alert=({text,onClose,dismiss=false})=> {
    const [alertVis,setAlertVis] = useState(dismiss)
    return (
      <>
      {alertVis &&
      <div
        className={'alert alert-primary'+(dismiss ? ' alert-dismissable' : '')}
      >
        {text}
        {dismiss &&
        <button
          type="button" className="btn-close"
          onClick = {() => {
            onClose()
            setAlertVis(true);
          }
          }
        >
        </button>
        }
      </div>
      }
      </>
    );
}

export default Alert;