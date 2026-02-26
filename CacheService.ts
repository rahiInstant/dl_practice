import { CacheFactory, CacheType } from "./CacheFactory.ts";
import { ICache } from "./Interfaces/ICache.ts";
import { ICartCache } from "./Interfaces/ICartCache.ts";
import { IPayCache } from "./Interfaces/IPayCache.ts";

export class CacheService {
  private cache: ICache | IPayCache | ICartCache;
  constructor() {
    this.cache = CacheFactory.createCache(CacheType.REDIS);
  }

  connect() {
    this.cache = CacheFactory.createCache(CacheType.MEMCACHE);
    if ("connect" in this.cache) {
      this.cache.connect();
    }
    return this.cache;
  }

  put() {
    this.cache = CacheFactory.createCache(CacheType.MEMORY);
    if ("put" in this.cache) {
      this.cache.put();
    }
    return this.cache;
  }
  set(key: string, value: string) {
    this.cache.set(key, value);
  }
  get(key: string) {
    this.cache.get(key);
  }
}
