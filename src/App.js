import logo from './logo.svg';
import './App.css';
import Button1 from './component/button.js';

function App() {
  function message(){
    alert("BUTTON CLICKED!");
  }

  return <>
  <h1>DANGAL GREETINGS</h1>
  <Button1 text="click me!" event={message}/>
  </> 
  
}

export default App;
