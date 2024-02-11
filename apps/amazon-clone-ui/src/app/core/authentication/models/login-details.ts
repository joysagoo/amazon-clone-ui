export interface LoginRequest {
    emailId: string,
    password: string;
}

export interface LoginResponse {
    jwt: string
}