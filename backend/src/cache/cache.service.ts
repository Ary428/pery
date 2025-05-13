import { Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  private cache = new Map<string, { timestamp: number; data: any }>();
  private ttl = 5 * 60 * 1000;

  get(key: string): any | null {
    const item = this.cache.get(key);
    if (item && Date.now() - item.timestamp < this.ttl) {
      return item.data;
    }
    return null;
  }

  set(key: string, data: any) {
    this.cache.set(key, { timestamp: Date.now(), data });
  }
}
