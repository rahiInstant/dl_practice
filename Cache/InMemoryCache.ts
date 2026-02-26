import { ICartCache } from "../Interfaces/ICartCache.ts";

export class InMemoryCache implements ICartCache {
  constructor() {}

  get(key: string) {
    console.log("value get from InMemoryCache");
  }

  set(key: string, value: string): Boolean {
    console.log("value set to InMemoryCache", key, value);
    return true;
  }

  put(): Boolean {
    console.log("put to InMemoryCache");
    return true;
  }
}
