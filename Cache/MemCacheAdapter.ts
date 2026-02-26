import { IPayCache } from "../Interfaces/IPayCache.ts";

export class MemCache implements IPayCache {
  constructor() {}

  get(key: string) {
    console.log("value get from MemCache");
  }

  set(key: string, value: string): Boolean {
    console.log("value set to MemCache", key, value);
    return true;
  }

  connect(): Boolean {
    console.log("connet to MemCache");
    return true;
  }
}
