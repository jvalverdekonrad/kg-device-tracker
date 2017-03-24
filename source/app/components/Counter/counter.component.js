import React from 'react';

import { Button } from 'app/components/shared';

const counterButtonCSS = 'counter-btn';

module.exports = (props) => {
    return (
        <div>
            <h1 className="counter-title" >{props.count}</h1>
            <div className="align-center">
                <Button text="+" css={counterButtonCSS} handleClick={props.increment} />
                <Button text="-" css={counterButtonCSS} handleClick={props.decrement} />
            </div>
        </div>
    )
}