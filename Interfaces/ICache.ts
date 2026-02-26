export interface ICache {
  set(key: string, value: string): Boolean;
  get(key: string): any;
}
