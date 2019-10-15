export interface IAction extends IAnyAction {
  type: string;
  [key: string]: any;
}

export interface IActionWithPayload<Payload = any> extends IAnyAction<Payload> {
  type: string;
  payload: Payload;
  [key: string]: any;
}

export interface IAnyAction<Payload = any> {
  type: string;
  payload?: Payload;
  [key: string]: any;
}

export interface IActionExtension {
  [key: string]: any;
}
