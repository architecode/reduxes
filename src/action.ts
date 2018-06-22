export interface Action {
  type: string;
  [key: string]: any;
}

export interface AnyAction extends Action {
  payload?: any;
}

export interface ActionWithPayload<P> extends AnyAction {
  payload: P;
}

export interface ActionExtension {
  [key: string]: any;
}
