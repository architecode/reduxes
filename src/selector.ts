export type WithSelector = (key: string) => Selector<any>;

export interface Selector<S> {
  keys(...keys: string[]): string[];
  select(key: string): Selector<any>;
  get(state: S): any;
  set(state: S, value: any): S;
  setIn(state: S, key: string | string[], value: any): S;
  push(state: S, value: any): S;
  pushIn(state: S, key: string | string[], value: any): S;
}
