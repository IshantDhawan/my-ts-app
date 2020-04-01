//Task 1
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var InterestCalculator = /** @class */ (function () {
    function InterestCalculator(principal, rate, time) {
        if (principal === void 0) { principal = 0; }
        if (rate === void 0) { rate = 0; }
        if (time === void 0) { time = 0; }
        this.principal = principal;
        this.rate = rate;
        this.time = time;
    }
    InterestCalculator.prototype.doCalculation = function () {
        return (this.principal * this.rate * this.time) / 100;
    };
    return InterestCalculator;
}());
var ShapeCalculator = /** @class */ (function () {
    function ShapeCalculator(length, width, breadth) {
        if (length === void 0) { length = 0; }
        if (width === void 0) { width = 0; }
        if (breadth === void 0) { breadth = 0; }
        this.length = length;
        this.width = width;
        this.breadth = breadth;
    }
    ShapeCalculator.prototype.doCalculation = function () {
        return (this.length * this.width * this.breadth);
    };
    return ShapeCalculator;
}());
var calculateInterest = new InterestCalculator(100, 5, 12);
console.log(calculateInterest.doCalculation());
var calculateNoInterest = new InterestCalculator();
console.log(calculateNoInterest.doCalculation());
var calculateShape = new ShapeCalculator(5, 4, 2);
console.log(calculateShape.doCalculation());
var calculateNoShape = new ShapeCalculator();
console.log(calculateNoShape.doCalculation());
//Task 2
function Loggers(config) {
    return function (target, prop, propdescriptor) {
        console.log(config.type + " - " + config.message + " on " + new Date());
    };
}
function Entity(courseinfo) {
    return function (target) {
        Object.defineProperty(target.prototype, 'name', { value: courseinfo.name });
        Object.defineProperty(target.prototype, 'accountNo', { value: courseinfo.accountNo });
    };
}
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.transactions = function (type, amount) {
        console.log("Amount " + type + " : " + amount);
    };
    __decorate([
        Loggers({
            message: 'Logged In',
            type: 'info'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", void 0)
    ], Customer.prototype, "transactions", null);
    Customer = __decorate([
        Entity({ name: 'Ishant', accountNo: 12345 })
    ], Customer);
    return Customer;
}());
var customer = new Customer();
customer.transactions('credited', 200);
customer.transactions('debited', 100);
