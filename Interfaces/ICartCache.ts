import { ICache } from "./ICache.ts";

export interface ICartCache extends ICache {
  put(): Boolean;
}
