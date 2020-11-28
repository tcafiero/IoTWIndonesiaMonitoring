import {writable} from 'svelte/store';

export const func = writable("empty");
export const id = writable("");
export const battery = writable("");
export const state = writable("empty");
export const previousState = writable("empty");
export const bottomMenu = writable();
export const connection = writable();