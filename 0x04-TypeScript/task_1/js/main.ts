interface Teacher {
    readonly firstName: string;
    readonly fullTimeEmployee: boolean;
    lastName: string;
    location: string;
    yearsOfExperience?: number;
    [propName: string]: any;
}
