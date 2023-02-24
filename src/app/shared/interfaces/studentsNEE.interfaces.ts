export interface ResponseStudentsNEE {
    message: string,
    data: StudentsNEE[],
}

export interface StudentsNEE {
    discapacidades: Disabilities[],
    gradoadaptacioncurricular1: string,
    idestudiante: number,
    nombreestudiante: string
}

interface Disabilities {
    nombrediscapacidad: string
}