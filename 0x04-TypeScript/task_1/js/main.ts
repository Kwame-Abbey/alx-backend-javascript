interface Teacher {
    readonly firstName: string;
    readonly fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    firstName: string;
    lastName: string;
}

function printTeacher(params: printTeacherFunction) {
    return `${params.firstName[0]}.${params.lastName}`
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return `${this.firstName}`;
    }
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}


