import CounterAction, { INCREASE, DECREASE } from "../../action/counter";

interface CounterReducerState {
  count: number;
}

const initialState: CounterReducerState = {
  count: 0,
};

const counterReducer = (state = initialState, action: CounterAction) => {
  switch (action.type) {
    case INCREASE: {
      return {
        count: state.count + 1,
      };
    }
    case DECREASE: {
      return {
        count: state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default counterReducer;
