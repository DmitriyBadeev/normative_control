import React from 'react';

import './pageWrapper.sass'

const PageWrapper = ({ children }) => (
    <div className="main-wrapper">
        {children}
    </div>
);

export default PageWrapper;