import { ICache } from "../Interfaces/ICache.ts";

export class RedisCache implements ICache {
  constructor() {}

  get(key: string) {
    console.log("value get from RedisCache");
  }

  set(key: string, value: string): Boolean {
    console.log("value set to RedishCache", key, value);
    return true;
  }
}
