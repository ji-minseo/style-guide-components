import React from 'react';
import proptypes from 'prop-types';
import { render } from '@testing-library/react';
import "./Row.css";

function Row ({title, contents, classname}) {
    return (<div className ="movies">
        
        <p className="movies__title fs-h2 fw-light">{title}</p>
        <div className={classname}>{contents}</div>
        
        </div>);
}

export default Row;
