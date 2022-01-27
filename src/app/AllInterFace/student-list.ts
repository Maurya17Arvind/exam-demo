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
export interface VerifyDataResponse {
    data: VerifyData[],
    message: string,
    statusCode: number
}
export interface AllExamData {
    _id: string,
    notes: string[],
    subjectName: string,
    email: string,
    Result: string[]
}
export interface AllExamForStudent {
    data: AllExamData[],
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

//Edit exam interface start
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
//Edit exam interface start

export interface DeleteExam {
    data: null;
    statusCode: number,
    message: string
}

//forgot-password interface start
export interface ForgotPassword {
    email: string
}
export interface ForgotPasswordResponse {
    data: [],
    message: string,
    statusCode: number
}
//forgot-password interface end


//Update student profile interface start
export interface UpdateStudentNameData {
    email: string,
    name: string,
    id: string
}
export interface UpdateStudentName {
    data: UpdateStudentNameData[],
    message: string,
    statusCode: number
}
//Update student profile interface end

//Create Exam All InterFace stars
export interface CreateExamQuestions {
    options: string[],
    _id: string,
    question: string
}
export interface CreateExamData {
    questions: CreateExamQuestions[],
    email: string,
    notes: string[],
}

export interface CreateExamResponses {
    data: CreateExamData[],
    message: string,
    statusCode: number
}
//Create Exam All InterFace end


//view exam list interface start
export interface ViewExamData {
    email: string,
    notes: string[],
    subjectName: string,
    _id: string,
    __v: string
}
export interface ViewExamResponses {
    data: ViewExamData[],
    message: string,
    statusCode: number
}
//view exam list interface end

//view exam details interface start
export interface ExamDetailsQuestions {
    options: string[],
    question: string,
    answer: string
}
// export interface ExamDetailsData {
//     data: ExamDetailsQuestions[]
// }
// export interface ExamDetailsResponse {
//     message: string,
//     statusCode: number,
//     data: ViewExamDetail[]
// }
//view exam details interface end

//teacher folder view student details result start
export interface Result {
    _id: string,
    rank: number,
    subjectName: string,
    score: number,
    studentId: string,
    resultStatus: string,
    __v: number
}
//teacher folder view student details result end
//view student details interface start
export interface StudentDetailsData {
    _id: string,
    name: string,
    email: string,
    Result: Result[]
}
export interface StudentDetailsResponse {
    data: StudentDetailsData[],
    message: string,
    statusCode: number
}
