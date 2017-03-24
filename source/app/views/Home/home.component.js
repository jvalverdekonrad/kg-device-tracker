import React from 'react';

import { BrowserTab } from 'app/utils';

import { Button, Image } from 'app/components/shared';
import { react_icon } from 'assets/icons';

class HomeComponent extends React.Component {

    componentDidMount() {
        BrowserTab.update('React to go!');
    }

    render() {
        return (
            <div className="container" id="Home" >
                <div className="align-center">
                    <h1 className="page-title" >React to go!</h1>
                    <Image css='logo' source={react_icon} />
                </div>
                <h2 className="align-center">
                    Simple React-Redux boilerplate for a webapplication.
                </h2>    
            </div>
        );
    }

}

module.exports = HomeComponent;