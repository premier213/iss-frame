export interface ModeResult {
  env: string | undefined;
  base_url: string | undefined;
}

export const mode = (): ModeResult => {
  const result: ModeResult = { base_url: undefined, env: process.env.ENV };
  switch (process.env.ENV) {
    case "STAGE":
      result.base_url = process.env.STAGE_API_BASE_URL;
      break;
    case "PROD":
      result.base_url = process.env.PROD_API_BASE_URL;
      break;

    default:
      result.base_url = process.env.DEV_API_BASE_URL;
      break;
  }

  return result;
};
