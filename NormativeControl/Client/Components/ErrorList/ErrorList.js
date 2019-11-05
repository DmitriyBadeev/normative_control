import React from "react";

import './errorList.sass'
import IconButton from "@material-ui/core/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ErrorList({errorList, className, isDelete, deleteHandler, disable}) {

    return <div className={`error-list ${className}`}>
        {
            errorList.map((error, index) => {
                return <div className="error" key={index}>
                    <div className="error__point" /> <p className="error__text">{error}</p>
                    {
                        isDelete && <IconButton disabled={disable} className="error__remove" aria-label="delete" onClick={(e) => deleteHandler(index)}>
                            <FontAwesomeIcon icon="times"/>
                        </IconButton>
                    }
                </div>
            })
        }

    </div>
}