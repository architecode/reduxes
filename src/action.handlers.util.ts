import { ActionHandlers, XActionHandlers } from "./action.handlers";
import { Reducer } from "./reducer";
import { ReducerUtil } from "./reducer.util";
import { Selector, WithSelector } from "./selector";

export namespace ActionHandlersUtil {
  export const reduceXActionHandlers = (xActionHandlers: XActionHandlers<any, any>, withSelector: WithSelector): ActionHandlers<any, any> => {
    return Object.keys(xActionHandlers).reduce((result, key) => {
      const value = xActionHandlers[key];
      if (typeof value === "function") {
        result[key] = value as Reducer<any, any>;
      } else {
        mergeActionHandlers(result, withSelector(key), value);
      }
      return result;
    }, {} as ActionHandlers<any, any>);
  };

  export const mergeActionHandlers = (target: ActionHandlers<any, any>, selector: Selector<any>, source: XActionHandlers<any, any>): ActionHandlers<any, any> => {
    return Object.keys(source).reduce((result, key) => {
      const value = source[key];
      if (typeof value === "function") {
        result[key] = ReducerUtil.mapReducer(selector, value);
      } else {
        mergeActionHandlers(result, selector.select(key), value);
      }
      return result;
    }, target);
  };
}
