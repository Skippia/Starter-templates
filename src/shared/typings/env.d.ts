/* eslint-disable ts/consistent-type-definitions */
/* eslint-disable import/unambiguous */

interface ImportMetaEnv {
  readonly VITE_APP_ENV1: string
  readonly VITE_APP_ENV2: number
}

interface ImportMeta {
  env: ImportMetaEnv
}
