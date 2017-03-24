import { applyMiddleware } from 'redux';
// Middleware plugins.
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';

module.exports = function injectMiddleware() {
    applyMiddleware(
        reduxInmutableStateInvariant()
    );
}
