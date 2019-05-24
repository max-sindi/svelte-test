
import { writable } from "svelte/store"

// function createAuth() {
//   return {
//     isLoggedIn:
//     user: writable(null),
//   }
// }

export const isLoggedIn = writable(true);