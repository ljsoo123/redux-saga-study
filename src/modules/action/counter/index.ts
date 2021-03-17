export const INCREASE = "counter/INCREASE";
export const DECREASE = "counter/DECREASE";

export const INCREASE_SAGA = "counter/INCREASE_SAGA";
export const DECREASE_SAGA = "counter/DECREASE_SAGA";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseSaga = () => ({ type: INCREASE_SAGA });
export const decreaseSaga = () => ({ type: DECREASE_SAGA });

type CounterAction = ReturnType<typeof increase | typeof decrease>;

export default CounterAction;
