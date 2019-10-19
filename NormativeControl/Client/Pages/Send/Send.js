import React from 'react';

import Stepper from '../../Components/Stepper/Stepper';
import SolidButton from "../../Components/Buttons/SolidButton";
import './send.sass';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default class Send extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            activeStep: 1,
            steps: [
                'Выбор шаблона', 'Загрузка работы', 'Проверка', 'Отправка'
            ],
            selectedTemplate: 1,
            templates: [
                'Курсовой отчет',
                'Дипломная работа'
            ]
        };

        this.prevStep = this.prevStep.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.selectTemplate = this.selectTemplate.bind(this);
    }

    prevStep() {
        this.setState({activeStep: this.state.activeStep - 1})
    };

    nextStep() {
        this.setState({activeStep: this.state.activeStep + 1})
    };

    selectTemplate(numTemplate) {
        this.setState({selectedTemplate: numTemplate})
    }

    getStep() {
        switch (this.state.activeStep) {
            case 1:
                return <Step1 selectTemplate={this.selectTemplate}
                              templates={this.state.templates}
                              selectedTemplate={this.state.selectedTemplate}/>;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
        }
    }

    render() {

        return <main>
            <Stepper steps={this.state.steps} activeStep={this.state.activeStep}/>


            {this.getStep()}


            <div className="send-buttons">
                <SolidButton size="big"
                             text="Предыдущий шаг"
                             disable={this.state.activeStep === 1}
                             onClick={this.prevStep}/>
                <SolidButton size="big"
                             text="Следующий шаг"
                             disable={this.state.activeStep === this.state.steps.length}
                             onClick={this.nextStep}/>
            </div>
        </main>
    }
}