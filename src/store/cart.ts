import { writable } from "svelte/store";

const data: string[] = [];
export const items = writable(data);
