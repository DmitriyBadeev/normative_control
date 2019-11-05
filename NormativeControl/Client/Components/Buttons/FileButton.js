import React from 'react';

import './buttons.sass';

export default class FileButton extends React.Component{
    render() {
        return <div className={`lite-button lite-button_file medium ${this.props.className}`}>
            <input id={this.props.id} accept=".docx" type='file' className="opacity-0 input-file-btn" onChange={this.props.onChange}/>
            <label htmlFor={this.props.id}>{this.props.text}</label>
        </div>
    }
}