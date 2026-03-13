import * as readline from "readline";

export const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Interfaces for the data structures used in the application
export const api_Home = "https://dog.ceo/api/breeds/image/random";

// API TYPE --> Repuesta real de la API
export interface DoImageApi {
    message: string;
    status: string;
}

// Normalization of the data
export interface Doimage {
    url: string;
}


