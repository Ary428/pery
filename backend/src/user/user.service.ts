import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  private tokenToLanguage = new Map<string, string>();

  register(userName: string, language: string): { token: string } {
    const token = uuidv4();
    this.tokenToLanguage.set(token, language);
    return { token };
  }

  getLanguage(token?: string): string | undefined {
    return token ? this.tokenToLanguage.get(token) : undefined;
  }
}
