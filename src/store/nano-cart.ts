import { persistentAtom } from "@nanostores/persistent";

const data: string[] = [];

export const cart = persistentAtom("cart", data, {
  encode: JSON.stringify,
  decode: JSON.parse,
});
