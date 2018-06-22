import { Reducer, XReducer } from "./reducer";
import { Selector, WithSelector } from "./selector";
import { XActionHandlers } from "./action.handlers";
import { ActionHandlersUtil } from "./action.handlers.util";

export namespace ReducerUtil {
  export const DefaultReducer: Reducer<any, any> = state => state;

  export const mapReducer = (selector: Selector<any>, reducer: XReducer<any, any>): Reducer<any, any> => (
    (_selector, _reducer) => (state: any, action: any) => _reducer(state, action, _selector)
  )(selector, reducer);

  export const createReducer = <S>(initialState: S, xActionHandlers: XActionHandlers<any, any>, withSelector: WithSelector): Reducer<S, any> =>
    (state = initialState, action) =>
      (ActionHandlersUtil.reduceXActionHandlers(xActionHandlers, withSelector)[action.type] || DefaultReducer)(state, action);
}
