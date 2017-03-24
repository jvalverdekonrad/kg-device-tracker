const COUNTER_ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
}

const COUNTER_ACTIONS = {
  INCREMENT: () => { return { type: COUNTER_ACTION_TYPES.INCREMENT } },
  DECREMENT: () => { return { type : COUNTER_ACTION_TYPES.DECREMENT } },
};

function CounterReducer (state = 0, action) {
  switch (action.type) {
    case COUNTER_ACTION_TYPES.INCREMENT:
      return state + 1
    case COUNTER_ACTION_TYPES.DECREMENT:
      return state - 1
    default:
      return state
  }

}

module.exports = {
  COUNTER_ACTIONS,
  CounterReducer,
};