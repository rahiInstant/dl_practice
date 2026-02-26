import { CacheService } from "./CacheService.ts";

const cacheService = new CacheService();
cacheService.set("view", "300");
cacheService.connect().set("amount", "5000");
cacheService.put().set("ItemName", "phone");
