export enum Environments {
  DEV = "dev",
  STG = "stg",
}

interface EnvironmentVariables {
  hogeParam: string;
}

const devEnv: EnvironmentVariables = {
  hogeParam: "hoge",
};

const stgEnv: EnvironmentVariables = {
  hogeParam: "fuga",
};

export function getEnvironmentVariables(
  env: string
): EnvironmentVariables | undefined {
  switch (env) {
    case Environments.DEV:
      return devEnv;
    case Environments.STG:
      return stgEnv;
    default:
      return undefined;
  }
}
