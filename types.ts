// Interfaces for the data structures used in the application
const api_Home = "https://dog.ceo/api/breeds/image/random";

// API TYPE
export interface Root {
    message: string
    status: string
}

// Normalization of the data
export interface Doimage {
    url: string
    st: string
}

