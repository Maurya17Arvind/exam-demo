import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export interface StudentList {
    status: string,
    _id: string,
    name: string,
    email: string
}
// export interface StudentProfile {
//     image: string,
//     status: string,
//     _id: string,
//     name: string,
//     email: string
// }
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
export interface ViewExamData {
    email: string,
    notes: string[],
    subjectName: string,
    _id: string,
    __v: string
}
export interface ViewExamDetail {
    options: string[],
    questions: string[],
    question: string,
    answer: string
}

export interface StudentProfileData {
    _id: string,
    name: string,
    email: string,
    role: string
}
export interface StudentProfile {
    data: StudentProfileData,
    statusCode: number,
    message: string
}
export interface VerifyData {
    status: string,
    _id: string,
    name: string,
    email: string,
}
export interface AllExamData {
    _id: string,
    notes: string[],
    subjectName: string,
    email: string,
    Result: string[]
}
export interface AllExamForStudent {
    data: AllExamData,
    statusCode: number,
    userId: string,
    message: string
}
export interface PaperData {
    options: string[],
    _id: string,
    question: string
}

export interface ExamPaperResponse {
    data: PaperData[],
    statusCode: number,
    message: string
}

export interface EditViewResponseData {
    options: string[],
    question: string,
    answer: string
}
export interface EditShowExamResponse {
    data: EditViewResponseData;
    statusCode: number,
    message: string
}
export interface DeleteExam {
    data: null;
    statusCode: number,
    message: string
}
export interface ForgotPassword {
    email: string
}
export interface ForgotPasswordResponse {
    data: [],
    message: string,
    statusCode: number
}


