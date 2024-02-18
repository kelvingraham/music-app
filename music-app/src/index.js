import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App, {App2} from './App';
//import App from './App';
//import Alert from './Alert';
import Button from './Button';
import Message from './Message';
import reportWebVitals from './reportWebVitals';

let tempList = ["AA","AAA","AAAA","AAAAA"]
let tempHead = "Heading1"
const handleSelect = (item) => {
  console.log(item+" logged from parent");
  console.log("potato logged from parent");
}

//let alertText="Alert from Parent!"

let buttonText="secondary"
//const handleBtnClick = (ex,ey) => console.log(ex+", "+ey+" logged from parent");

//const [alertVis,setAlertVis] = useState(false)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button
      text = {buttonText}
      //onClickDef = {handleBtnClick}
      //onClick = {() => setAlertVis(true)}
    />
    <Message
      items = {tempList}
      heading = {tempHead}
      parentHandler = {handleSelect}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
