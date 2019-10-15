import { IAnyAction } from "./IAction";

export interface IAnyActionHandler<State = any> {
  [type: string]: (state: State, action: any) => State;
}

export interface IActionHandler<State = any, Action = IAnyAction> {
  [type: string]: (state: State, action: Action) => State;
}
