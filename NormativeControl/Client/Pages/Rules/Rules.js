import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './rules.sass';

import * as API from '../../API';
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Rules(){

    const [templates, setTemplates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        API.GetTemplates()
            .then(res => {
                setIsLoading(false);
                setTemplates(res.data);
            })
            .catch(error => {
                setIsLoading(false);
                console.log(error);
            })
    }, []);

    return <div>
        <h1>Правила оформления</h1>
        <p className="mt-20">Здесь вы можете скачать правила оформления работ.</p>

        <TemplatesData templates={templates} isLoading={isLoading}/>
    </div>
}

function TemplatesData({templates, isLoading}) {

    if (isLoading)
        return <div className="d-flex jc-center mt-40">
            <CircularProgress color="secondary"/>
        </div>;

    return <div className="templates">
        {templates.map(temp => {
            return <a href={temp.path} target="_blank" key={temp.id} >
                <div className="rules-template">
                    <div className="rules-template__title">{temp.name}</div>
                </div>
            </a>
        })}
    </div>
}