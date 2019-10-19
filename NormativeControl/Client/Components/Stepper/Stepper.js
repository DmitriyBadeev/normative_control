import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './stepper.sass'

export default class Stepper extends React.Component{
    constructor(props) {
        super(props);
    }

    getClasses(index) {
        if (this.props.activeStep - 1 === index)
            return 'step step_active';
        if (index + 1 < this.props.activeStep)
            return 'step step_success';

        return 'step';
    }

    getNumOrIcon(index) {
        if (index + 1 < this.props.activeStep)
            return <FontAwesomeIcon icon='check' />;

        return index + 1;
    }

    render() {
        return <div className="stepper">

            {this.props.steps.map((step, index) => {
                return <React.Fragment key={index + 1}>
                    <div className={this.getClasses(index)}>
                        <div className="step__num">{this.getNumOrIcon(index)}</div>
                        <div className="step__title">{step}</div>
                    </div>

                    {this.props.steps.length - 1 !== index? <div className="step__line"/> : null}
                </React.Fragment>
            })}

        </div>
    }
}