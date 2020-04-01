//Task 1

interface Calculator{
    doCalculation() : number;
}

class InterestCalculator implements Calculator{
    constructor(private principal: number = 0 , private rate:number = 0,private time:number = 0){

    }

    doCalculation(): number{
        return (this.principal * this.rate * this.time)/100;
    }
}

class ShapeCalculator implements Calculator{
    constructor(private length: number = 0, private width:number = 0,private breadth:number =0){

    }

    doCalculation(): number{
        return (this.length * this.width * this.breadth);
    }
}

let calculateInterest = new InterestCalculator(100,5,12);
console.log(calculateInterest.doCalculation());

let calculateNoInterest = new InterestCalculator();
console.log(calculateNoInterest.doCalculation());

let calculateShape = new ShapeCalculator(5,4,2);
console.log(calculateShape.doCalculation());

let calculateNoShape = new ShapeCalculator();
console.log(calculateNoShape.doCalculation());


//Task 2

function Loggers(config:any) {
    return function (target: any, prop: any, propdescriptor: PropertyDescriptor) {
        console.log(`${config.type} - ${config.message} on ${new Date()}`);
    }
}
type CustomerInfo = {
    name: string;
    accountNo: number;
}

function Entity(courseinfo: CustomerInfo) {
    return function (target: any) {
        Object.defineProperty(target.prototype, 'name', { value: courseinfo.name });
        Object.defineProperty(target.prototype, 'accountNo', { value: courseinfo.accountNo });
    }

}

@Entity({ name: 'Ishant' , accountNo: 12345})
class Customer{
    
    @Loggers({
        message: 'Logged In',
        type: 'info'
    })
    transactions(type:string, amount:number): void{
        console.log(`Amount ${type} : ${amount}`);
    }
}   

let customer = new Customer();
customer.transactions('credited',200);
customer.transactions('debited',100);