import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import trimStart from 'lodash/trimStart';

interface Options<TypeParams, TypePayload, TypeHeaders> {
  params?: Optional<TypeParams>;
  payload?: Optional<TypePayload>;
  customHeaders?: Optional<TypeHeaders>;
  withCredentials?: Optional<boolean>;
}

export class APIService<
  Payload = Record<string, unknown> | string | FormData,
  Headers = Record<string, unknown>,
  Params = Record<string, unknown>
> {
  host: string;
  accessToken: string;

  constructor(host: string, token?: string) {
    this.host = host;
    this.accessToken = token;
  }

  protected constructURL(path: string): string {
    return `https://${this.host}/${trimStart(path, '/')}`;
  }

  protected execute = async (
    path: string,
    method: Method = 'GET',
    options: Options<Params, Payload, Headers> = {
      customHeaders: null,
      params: null,
      payload: null,
      withCredentials: false
    }
  ): Promise<AxiosResponse> => {
    const headers: {
      'Content-Type': string;
      'X-Gismeteo-Token'?: string;
    } = { 'Content-Type': 'application/json', ...options.customHeaders };

    if (this.accessToken) {
      headers['X-Access-Token'] = this.accessToken;
    }

    const config: AxiosRequestConfig = {
      headers: headers
    };

    if (options.params) {
      config.params = options.params;
    }

    if (options.withCredentials) {
      config.withCredentials = true;
    }

    const url = this.constructURL(path);
    const response = await axios({ method, url, data: options.payload, ...config });
    return response;
  };
}
