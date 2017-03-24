import React from 'react';
import { BrowserTab } from 'app/utils';
import { Counter } from 'app/components';

class ExampleComponent extends React.Component {

    static contextTypes = {
        store: React.PropTypes.any,
    };

    handleBrowserTab (counter) {
        BrowserTab.update(`Counter Example | ${counter}`);
    };

    componentWillMount () {
        const store = this.context.store;
        // Initial Browser Tab.
        this.handleBrowserTab(store.getState().counter);
        // Subscribtion to store updates.
        store.subscribe(() => {
            this.handleBrowserTab(store.getState().counter);
        });
    }

    render(){
        return (
            <section className="container">
                <Counter />
            </section>
        );
    }

}

module.exports = ExampleComponent;