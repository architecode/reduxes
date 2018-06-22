import { Reducer, XReducer } from "./reducer";

export interface ActionHandlers<S, P> {
  [type: string]: Reducer<S, P>;
}

export interface XActionHandlers<S, P> {
  [type: string]: XReducer<S, P> | XActionHandlers<any, any>;
}
