import PACKAGE_JSON from "../../package.json";

// Fill APP_NAME on ENV or package.json
export const APP_NAME = "CIS Audy";
export const APP_DOMAIN = process.env.NEXT_PUBLIC_APP_DOMAIN || ("http://localhost:3000/" as const);
export const APP_BASE_URL_API = process.env.NEXT_PUBLIC_APP_BASE_URL_API || ("http://localhost:3000" as const);
export const APP_COOKIE_NAME = process.env.NEXT_PUBLIC_COOKIE_NAME ?? ("tawas_dev_kmzway87ab" as const);
export const APP_IS_AUTH_COOKIE_NAME = process.env.NEXT_PUBLIC_APP_IS_AUTH_COOKIE_NAME ?? "is_auth";
export const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV;
export const { NODE_ENV } = process.env;
export const APP_DEBUG_CONSOLE = process.env?.NEXT_PUBLIC_APP_DEBUG_CONSOLE === ("true" as const);

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || PACKAGE_JSON.version || ("1.1.4" as const);

// Feature Flag
export const APP_FF = {
  SHOW_TABBING_PATIENT: process.env.NEXT_PUBLIC_APP_DOMAIN !== "https://cis.audydental.com", // genti ke boolean true, jika sudah rilis fiturnya
};
