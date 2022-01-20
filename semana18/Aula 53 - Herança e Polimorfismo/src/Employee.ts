import { User } from './User'

export class Employee extends User {
    protected baseSalary: number;
    protected admissionDate: string;

    static BENEFITS_VALUE: number = 400

    constructor(id: string, email: string, name: string, password: string, baseSalary: number, admissionDate: string){
        super(id, email, name, password)
        this.baseSalary = baseSalary
        this.admissionDate = admissionDate
    }

    getAdmissionDate(){
        return this.admissionDate
    }

    getBaseSalary(){
        return this.baseSalary
    }

    calculateTotalSalary(): number{
        return this.baseSalary + Employee.BENEFITS_VALUE
    }



}