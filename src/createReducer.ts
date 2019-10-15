import { IAnyActionHandler } from "./IActionHandler";

export const createReducer = (defaultState: any, ...handlers: Array<IAnyActionHandler<any>>): any => ((Handlers): any => {
  const ActionHandler: IAnyActionHandler = Object.assign({}, ...Handlers);

  return (state: any = defaultState, action: any) => {
    const Reducer = ActionHandler[action.type];

    if (Reducer) {
      return Reducer(state, action);
    } else {
      return state;
    }
  };
})(handlers);
