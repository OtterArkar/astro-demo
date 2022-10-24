import { persistentAtom } from "@nanostores/persistent";

const locale: string = "en";

export const i18n = persistentAtom("locale", locale, {
  encode: JSON.stringify,
  decode: JSON.parse,
});
