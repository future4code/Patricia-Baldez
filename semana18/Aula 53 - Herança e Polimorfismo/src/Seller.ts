import { Employee } from  './Employee'

export class Seller extends Employee {
    private salesQuantity: number = 0;

    static SELLING_COMMISSION: number = 5


    setSalesQuantity(quantity: number): void{
        this.salesQuantity += quantity
    }

    getSalesQuantity(): number{
        return this.salesQuantity
    }

    calculateTotalSalary(): number{
        return this.baseSalary + Employee.BENEFITS_VALUE + (Seller.SELLING_COMMISSION * this.salesQuantity)
    }

}