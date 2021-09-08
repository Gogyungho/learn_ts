const x = {};
const y = {};

console.log(x.toString());
console.log(y);
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // Instance member level
    // this.makeCoffee = (shots) => {
    //     console.log('making...')
    // }
}
CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...')
}
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteeMachine(milk){
    this.milk = milk;
};
LatteeMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteeMachine = new LatteeMachine(10);
console.log(latteeMachine)
LatteeMachine.makeCoffee();

// prototype은 자바스크립트에서 객체지향 프로그래밍, 상속과 코드의 재사용성을 높이기 위해 사용한다. 