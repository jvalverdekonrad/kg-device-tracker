import { createStore, combineReducers } from 'redux';
import { combinedReducers, injectMiddleware } from 'app/store';

module.exports = function configureStore (initialState = {}) {
    return createStore(
            combinedReducers,
            initialState,
            injectMiddleware()
        );
};