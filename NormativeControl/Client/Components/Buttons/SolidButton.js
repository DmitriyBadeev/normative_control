import React from 'react';

import './buttons.sass';

export default class SolidButton extends React.Component{

    render() {
        return <button className={`solid-button ${this.props.size} ${this.props.className}`}>
            {this.props.text}
        </button>
    }
}