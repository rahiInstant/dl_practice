import { ICache } from "./ICache.ts";

export interface IPayCache extends ICache {
  connect(): Boolean;
}
