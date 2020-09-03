import { writable } from "svelte/store";

let apiUrl = writable("https://galaxybackend.herokuapp.com/"); //PRODUCTION
// let apiUrl = writable("http://localhost:1337/"); //DEVELOPMENT

export { apiUrl };
