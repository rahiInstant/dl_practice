import { ICache } from "./Interfaces/ICache.ts";
import { InMemoryCache } from "./Cache/InMemoryCache.ts";
import { MemCache } from "./Cache/MemCacheAdapter.ts";
import { RedisCache } from "./Cache/RedishCacheAdapter.ts";
import { IPayCache } from "./Interfaces/IPayCache.ts";
import { ICartCache } from "./Interfaces/ICartCache.ts";

export enum CacheType {
  MEMORY = "memory",
  MEMCACHE = "memcache",
  REDIS = "redis",
}

export class CacheFactory {
  static createCache(type: CacheType): IPayCache | ICartCache | ICache {
    switch (type) {
      case CacheType.MEMORY:
        return new InMemoryCache();
      case CacheType.MEMCACHE:
        return new MemCache();
      case CacheType.REDIS:
        return new RedisCache();
      default:
        return new RedisCache();
    }
  }
}
