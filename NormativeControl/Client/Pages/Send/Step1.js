import React from 'react';

import './send.sass';
import {Link} from "react-router-dom";

export default class Step1 extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedTemplate: 1
        }
    }

    selectTemplate(num) {
        this.props.selectTemplate(num);
    }

    render() {
        return <div className="step-wrapper">
            <p className="step-text">Выберете нужный шаблон офорления, который будет использоваться для проверки вашей работы.</p>

            <div className="templates">

                {this.props.templates.map((temp, index) => {
                    return <div className={index + 1 === this.props.selectedTemplate? "template template_active" : "template"}
                                onClick={() => this.selectTemplate(index + 1)}
                                key={temp.id}>
                        <div className="template__title">{temp.name}</div>
                        <div className="template__link"><a href={temp.path} target="_blank">Правила оформления</a></div>
                    </div>
                })}

            </div>
        </div>
    }
}