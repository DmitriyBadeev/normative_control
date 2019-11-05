import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function SmallStepper({steps, activeStep}) {

    const getClasses = (index) => {
        if (activeStep - 1 === index)
            return 'step step_active';
        if (index + 1 < activeStep)
            return 'step step_success';

        return 'step';
    };

    const getNumOrIcon = (index) => {
        if (index + 1 < activeStep)
            return <FontAwesomeIcon icon='check' />;

        return '';
    };

    return <div className="small-stepper">

        {steps.map((step, index) => {
            return <React.Fragment key={index}>
                <div className={getClasses(index)}>
                    <div className="step__num">{getNumOrIcon(index)}</div>
                    {step}
                </div>

                {steps.length - 1 !== index? <div className="step__line"/> : null}
            </React.Fragment>
        })}

    </div>
}