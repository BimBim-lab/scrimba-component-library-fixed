import React from 'react';
import cn from 'classnames';
import { FaCloudUploadAlt } from "react-icons/fa";


export default function Cards ({
    title,
    description,
    icon,
    hoverable = true,
    forceHover = false,
    debug = false,
    className
}){
    const Icon = icon || <FaCloudUploadAlt />;
    return(
        <div className={cn("card", {"card-hoverable": hoverable, "is-hover": forceHover, "card--debug": debug, className})}>
            <div className="card-icon">{Icon}</div>
            {title && <h3 className="card-title">{title}</h3>}
            {description && <p className="card-desc">{description}</p>}
        </div>
    )
}