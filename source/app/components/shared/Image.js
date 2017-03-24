import React from 'react';

const Image = ({ source, css}) => {

    return (
        <img className={css} src={source} />
    );

};

export default Image;