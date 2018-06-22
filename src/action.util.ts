import { isNullOrUndefined } from "util";
import { Action, ActionWithPayload, ActionExtension } from "./action";

export namespace ActionUtil {
  export interface ActionCreators {
    [actionCreator: string]: any;
  }

  export type ActionsUnion<A extends ActionCreators> = ReturnType<A[keyof A]>;

  export function createAction(type: string): Action;
  export function createAction<P>(type: string, payload: P, ext?: ActionExtension): ActionWithPayload<P>;
  export function createAction<P>(type: string, payload?: P, ext?: ActionExtension) {
    const action = isNullOrUndefined(payload) ? { type } : { type, payload };
    return isNullOrUndefined(ext) ?
      action :
      Object.keys(ext).reduce((result, key) => {
        result[key] = ext[key];
        return result;
      }, action);
  }
}
