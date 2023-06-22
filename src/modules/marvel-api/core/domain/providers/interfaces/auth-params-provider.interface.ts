export interface IAuthParams {
  ts: number;
  apikey: string;
  hash: string;
}

export interface IAuthParamsProvider {
  getAuthParams(): IAuthParams;
}
