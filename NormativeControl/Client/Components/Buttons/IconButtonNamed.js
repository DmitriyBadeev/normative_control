import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './buttons.sass';


export default function IconButtonNamed({text, icon, className, disable, onClick, isFile, id}) {

    if (isFile)
        return <div className={`icon-button ${className}`}>
            <div className="icon-button__icon"><FontAwesomeIcon icon={icon} /></div>
            <label htmlFor={id} className="icon-button__text">{text}</label>
            <input id={id} accept=".docx" type='file' className="opacity-0 input-file-btn" disabled={disable} onChange={onClick}/>
        </div>;

    return <button className={`icon-button ${className}`} disabled={disable} onClick={onClick}>
        <div className="icon-button__icon"><FontAwesomeIcon icon={icon} /></div>
        <div className="icon-button__text">{text}</div>
    </button>
}