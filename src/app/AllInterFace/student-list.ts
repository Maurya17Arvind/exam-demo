import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface StudentList {
    status: string,
    _id: string,
    name: string,
    email: string
}
export interface StudentProfile {
    image: string,
    status: string,
    _id: string,
    name: string,
    email: string
}
export interface StudentListResponse {
    count: number,
    data: StudentList[],
    message: string,
    statusCode: number
}
export interface SignUpData {
    name: string,
    email: string,
    id: string,
    role: string
}
export interface SignUpResponse {
    data: SignUpData[],
    message: string,
    statusCode: number
}
export interface LoginData {
    email: string,
    name: string,
    role: string,
    token: string
}
export interface LoginResponse {
    data: LoginData,
    message: string,
    statusCode: number
}
