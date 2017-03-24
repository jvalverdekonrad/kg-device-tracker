import { combineReducers } from 'redux';
import { CounterReducer } from '../components/Counter/counter.reducer';

module.exports = combineReducers({
    counter: CounterReducer
});