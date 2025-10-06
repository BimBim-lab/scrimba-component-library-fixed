import React from 'react';
import classNames from 'classnames';
import { BsCheckCircle, BsInfoCircle, BsExclamationTriangle, BsXCircle } from "react-icons/bs";

const ICONS = {
  success: <BsCheckCircle />,
  info: <BsInfoCircle />,
  warning: <BsExclamationTriangle />,
  error: <BsXCircle />,
};

export default function Toast({ variant="success", title, message, className }) {
  return (
    <div className={classNames("tp", `tp--${variant}`, className)}>
      <div className="tp__icon">{ICONS[variant]}</div>
      <div className="tp__body">
        <strong className="tp__title">{title}</strong>
        <p className="tp__msg">{message}</p>
      </div>
    </div>
  );
}