import { useState } from "react"
import { ReactComponent as CloseIcon } from "../icons/close.svg";
import { ReactComponent as InfoIcon } from "../icons/info.svg";
import { ReactComponent as WaringIcon } from "../icons/warning.svg";

export default function AlarmBox(props:{idx:number, setData:React.Dispatch<React.SetStateAction<any[]>>, message:string, okMessage:string, noMessage:string, messageType:'INFO'|'WARNING', title:string}){

    const onClickHandler = () => {
      props.setData((dataList:any[]) => {
        dataList.pop()
        return [...dataList]
      })
    }
    return <div className="alarm-box" id={`alarm-${props.title}-${props.idx}`}>
      <div className="alarm-message">
        <button className="alarm-box-close-button" onClick={onClickHandler}>
          {(props?.noMessage || props?.okMessage) && <CloseIcon/>}
        </button>
        {props?.messageType == 'INFO' ? <InfoIcon className="alarm-box-info-icon"/> : <WaringIcon className="alarm-box-warning-icon"/>}
         {props?.message}
         </div>
      {props?.noMessage && <button className="alarm-box-ok alarm-box-ok-black" onClick={onClickHandler}>{props?.noMessage}</button>}
      {props?.okMessage && <button className="alarm-box-ok alarm-box-ok-blue" onClick={onClickHandler}>{props?.okMessage}</button>}
    </div>
}