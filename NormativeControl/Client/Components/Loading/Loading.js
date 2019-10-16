import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import './loading.sass'

export default class Loading extends React.Component{

    render() {
        return <div className="loading-wrapper">
            <CircularProgress color="secondary"/>
        </div>
    }
}