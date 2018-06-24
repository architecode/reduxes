import { WithSelector, Selector } from "./selector";
import { SelectorUtil } from "./selector.util";

export const createImmutableSelector: SelectorUtil.CreateSelector = (...keys: string[]) => ((_keys: string[]) => {
  return {
    keys: (...xKeys) => ([..._keys, ...xKeys]),
    select: (key) => createImmutableSelector(..._keys, key),
    get: (state) => state.getIn(_keys),
    set: (state, value) => state.setIn([...keys], value),
    setIn: (state, key, value) => Array.isArray(key) ? state.setIn([..._keys, ...key], value) : state.setIn([..._keys, key], value),
    push: (state, value) => state.updateIn([..._keys], (list: any) => list.push(value)),
    pushIn: (state, key, value) => Array.isArray(key) ? state.updateIn([..._keys, ...key], (list: any) => list.push(value)) : state.updateIn([..._keys, key], (list: any) => list.push(value)),
  } as Selector<any>;
})(keys);

export const withImmutableSelector: WithSelector = SelectorUtil.createWithSelector(createImmutableSelector);
