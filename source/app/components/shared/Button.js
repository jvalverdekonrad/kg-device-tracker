import React from 'react';

const Button = ({ handleClick, text, css }) => {

    return (
        <button className={css} onClick={handleClick}>{text}</button>
    );

};

export default Button;