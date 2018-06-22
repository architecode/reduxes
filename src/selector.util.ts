import { Selector, WithSelector } from "./selector";

export namespace SelectorUtil {
  export type CreateSelector = (...keys: string[]) => Selector<any>;

  export const createWithSelector = (createSelector: CreateSelector): WithSelector => (
    (_createSelector) => (key: string) => _createSelector(key)
  )(createSelector);
}
