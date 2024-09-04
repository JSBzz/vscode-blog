import { ReactComponent as VscodeIcon } from "./icons/vscode-b.svg";
import { ReactComponent as WarningIcon } from "./icons/warning.svg";
import "./css/main.css";
import { useEffect, useState } from "react";
import AlramBox from "./components/AlramBox";

function Main() {
  const [sayHello, setSayHello] = useState(false)
  const [helloList, setHelloList] = useState<string[]>([])
  const [keyPress, setKeyPress] = useState<{[key:string]:boolean}>({isAdded:false})
  const keyDownHandler = (e:React.KeyboardEvent) => {
    setKeyPress((prevKey) =>({
      ...prevKey,
      [e.key]:true,
    }))
    if((keyPress?.Control || e.key =='Control') && (keyPress?.b || e.key=='b') && keyPress.isAdded == false){
      setSayHello(true)
    }
  }
  const keyUpHandler = (e:React.KeyboardEvent) => {
    setKeyPress((prevKey) =>({
      ...prevKey,
      [e.key]:false,
      isAdded:false
    }))
    setSayHello(false)
  }
  useEffect(() =>{
    console.log('??')
    if(sayHello && helloList.length < 6){
      setKeyPress((keys) =>({
        ...keys,
        'isAdded': true
      }))
      setHelloList([...helloList, "hello"])
      console.log(helloList)
    }
  },[sayHello])

  return (
    <div className="main-body" onKeyDown={keyDownHandler} onKeyUp={keyUpHandler} tabIndex={0} >
      <div className="main-container">
        <VscodeIcon className="main-vscode-icon" />
        <div className="command">
          <span className="command-text">Say Hello</span>
          <button className="command-btn">Ctrl</button>
          +
          <button className="command-btn">B</button>
        </div>
        <div className="alarm-container">
        {helloList.length > 5 && <AlramBox idx={0} setData={setHelloList} message={'Too Many Hello!'} noMessage="" okMessage="" messageType="WARNING" title="hello-warning"/>}
         {helloList.map((data, idx) => {
           return <AlramBox idx={idx} setData={setHelloList} message={'I Say Hello! 🖐️'} noMessage="Not Hello" okMessage="Hello" messageType="INFO" title="hello"/>
         })
         }
         </div>
      </div>
    </div>
  );
}

export default Main;
