import React from 'react';

import './buttons.sass';

export default class SolidButton extends React.Component{

    render() {
        return <button className={`lite-button ${this.props.size} ${this.props.className}`}
                       disabled={this.props.disable}
                       onClick={this.props.onClick}>
            {this.props.text}
        </button>
    }
}