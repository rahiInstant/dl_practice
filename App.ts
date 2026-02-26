import { CacheService } from "./CacheService.ts";

const cacheService = new CacheService();
cacheService.set("view", "300");
cacheService.connect().set("amount", "5000");
cacheService.put().set("ItemName", "phone");

// ========== output
// value set to RedishCache view 300
// connet to MemCache
// value set to MemCache amount 5000
// put to InMemoryCache
// value set to InMemoryCache ItemName phone


