import React from 'react';
import classNames from 'classnames';
import { BsEnvelope, BsX } from "react-icons/bs";


export default function ToolTip ({
    title = "Archive notes",
    message = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
    tone="bold", 
    variant="black",
    onClose,
    className
})
    {
    return (
    <div className={classNames("toast", `toast--${variant}`, `toast--${tone}`, className)}>
      <div className="toast__icon"><BsEnvelope/></div>
      <div className="toast__body">
        <strong className="toast__title">{title}</strong>
        <p className="toast__msg">{message}</p>
      </div>
      <button className="toast__close" onClick={onClose} aria-label="Close">
        <BsX/>
      </button>
    </div>
  );
}