import React from "react";

const Input = ({ onChange, value, type, className, placeholder }) => (
   <input placeholder={ placeholder } className={ className } type={ type } onChange={ onChange } value={ value } />
);

export default Input;