import { ConfigService } from '@nestjs/config';
import {
  IAuthParams,
  IAuthParamsProvider,
} from './interfaces/auth-params-provider.interface';
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class MarvelApiAuthProvider implements IAuthParamsProvider {
  constructor(private readonly configService: ConfigService) {}

  private readonly apiKey = this.configService.get<string>(
    'MARVEL_API_PUBLIC_KEY',
  );
  private readonly privateKey = this.configService.get<string>(
    'MARVEL_API_PRIVATE_KEY',
  );

  getAuthParams(): IAuthParams {
    const ts = new Date().getTime();
    return {
      ts: ts,
      apikey: this.apiKey,
      hash: this.generateHash(ts),
    };
  }

  private generateHash(ts: number) {
    const message = ts + this.privateKey + this.apiKey;
    return crypto.createHash('md5').update(message).digest('hex');
  }
}
