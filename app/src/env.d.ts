/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly TINA_CLIENT_ID: string;
  readonly TINA_TOKEN: string;
  readonly TINA_BRANCH: string;
  readonly N8N_WEBHOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
