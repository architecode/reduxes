import { IAction, IActionExtension, IActionWithPayload, IAnyAction } from "./IAction";

export function createAction(type: string): IAction;
export function createAction<Payload>(type: string, payload: Payload, ext?: IActionExtension): IActionWithPayload<Payload>;
export function createAction<Payload>(type: string, payload?: Payload, ext?: IActionExtension): IAnyAction {
  const action: IAnyAction = payload === undefined || payload === null ? { type } : { type, payload };

  return ext === undefined || ext === null ? action : Object.keys(ext).reduce((result, key) => {
    result[key] = ext[key];

    return result;
  }, action);
}
