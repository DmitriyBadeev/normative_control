import React from 'react';

import Stepper from '../../Components/Stepper/Stepper';
import SolidButton from "../../Components/Buttons/SolidButton";
import './send.sass';
import { Link } from "react-router-dom";

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import LiteButton from "../../Components/Buttons/LiteButton";

class Send extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeStep: +this.props.match.params.step,
            isBunNextStep: false,
            steps: [
                'Выбор шаблона', 'Загрузка работы', 'Проверка', 'Отправка'
            ],
            selectedTemplate: +this.props.match.params.template,
            templates: [
                'Курсовой отчет',
                'Дипломная работа'
            ],
            file: null,
            isSuccessLoaded: false,
            errors: [],
            isChecked: false
        };

        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.toBunNextStep = this.toBunNextStep.bind(this);
        this.toAllowNextStep = this.toAllowNextStep.bind(this);
        this.selectTemplate = this.selectTemplate.bind(this);
        this.onDropHandler = this.onDropHandler.bind(this);
        this.successLoaded = this.successLoaded.bind(this);
        this.setErrors = this.setErrors.bind(this);
    }

    setErrors(errors) {
        this.setState({isChecked: true});
        this.setState({errors: errors});
    }

    prevStep() {
        this.setState({activeStep: this.state.activeStep - 1});
        this.toAllowNextStep();
    }

    nextStep() {
        this.setState({activeStep: this.state.activeStep + 1})
    }

    toBunNextStep() {
        this.setState({isBunNextStep: true})
    }

    toAllowNextStep() {
        this.setState({isBunNextStep: false})
    }

    selectTemplate(numTemplate) {
        this.setState({selectedTemplate: numTemplate});
        this.setState({
            errors: [],
            isChecked: false
        });
    }

    onDropHandler(acceptedFile) {
        this.setState({file: acceptedFile})
    }

    successLoaded() {
        this.setState({isSuccessLoaded: true})
    }

    getStep() {
        switch (this.state.activeStep) {
            case 1:
                return <Step1 selectTemplate={this.selectTemplate}
                              templates={this.state.templates}
                              selectedTemplate={this.state.selectedTemplate}/>;
            case 2:
                return <Step2 onDropHandler={this.onDropHandler}
                              selectedFile={this.state.file}
                              toBunNextStep={this.toBunNextStep}
                              toAllowNextStep={this.toAllowNextStep}
                              successLoaded={this.successLoaded}
                              isSuccessLoaded={this.state.isSuccessLoaded}/>;
            case 3:
                return <Step3 templates={this.state.templates}
                              selectedTemplate={this.state.selectedTemplate}
                              file={this.state.file}
                              globalSetErrors={this.setErrors}
                              getGlobalErrors={this.state.errors}
                              isGlobalChecked={this.state.isChecked} />;
            case 4:
                return <Step4 templates={this.state.templates}
                              selectedTemplate={this.state.selectedTemplate}
                              isGlobalChecked={this.state.isChecked}
                              getGlobalErrors={this.state.errors}
                              file={this.state.file}/>;
        }
    }

    render() {

        return <main>
            {this.props.isAuth?
                <React.Fragment>
                    <Stepper steps={this.state.steps} activeStep={this.state.activeStep}/>

                    {this.getStep()}

                    <div className="send-buttons">
                        <LiteButton size="big"
                                     text="Предыдущий шаг"
                                     disable={this.state.activeStep === 1}
                                     onClick={this.prevStep}/>
                        <SolidButton size="big"
                                     text="Следующий шаг"
                                     disable={this.state.activeStep === this.state.steps.length || this.state.isBunNextStep}
                                     onClick={this.nextStep}
                        />
                    </div>
                </React.Fragment>

                :

                <p className="shouldAuth">Для того, чтобы отправить работу нужно <Link to="/sign-in">авторизоваться</Link></p>
            }
        </main>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Send));