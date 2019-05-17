export interface IAppConfig {
  env: {
      name: string;
  };
  apiServer: {
      protocol: string,
      host: string,
      token: string;
  };
}