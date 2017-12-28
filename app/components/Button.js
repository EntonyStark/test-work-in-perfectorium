import React from "react";

const Button = ({ onClick, className, type, status, text }) => (
    <button type={ type } className={`btn btn-${status} ${ className }`} onClick={ onClick }>{ text }</button>
);

export default Button;