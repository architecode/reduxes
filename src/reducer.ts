import { ActionWithPayload } from "./action";
import { Selector } from "./selector";

export interface Reducer<S, P> {
  (state: S, action: ActionWithPayload<P>): S;
}

export interface XReducer<S, P> {
  (state: S, action: ActionWithPayload<P>, selector: Selector<S>): S;
}
