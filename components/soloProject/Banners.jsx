import React from 'react';
import classnames from 'classnames';
import {dataText} from '../Data/bannersData';
import { BsCheckCircle, BsExclamationTriangle,BsXCircle,BsInfoCircle } from "react-icons/bs";


export default function Banners ({ type="neutral", lines="singleLine" }) {
    const iconType = {
        success: <BsCheckCircle style={{ color: "green" }} />,
        warning: <BsExclamationTriangle style={{ color: "orange" }} />,
        error: <BsXCircle style={{ color: "red" }} />,
        neutral: <BsInfoCircle style={{ color: "blue" }} />
    };

    return (
        <div className={classnames("banner", `banner--${type}`, `banner--${lines}`)}>
            <section className="banner__title">
                {iconType[type]}
                <h3>{dataText[type].title}</h3>
            </section>
            {lines === "multiLines" && <p>{dataText[type].description}</p>}
        </div>
    );
}