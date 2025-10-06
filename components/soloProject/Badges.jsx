import React from 'react';
import classnames from 'classnames';

export default function Badges ({ type="square", color="gray", children="Badge" }){ 
    return (<div className={classnames("badge", `badge--${type}`, `badge--${color}`)}>{children}</div>)
}