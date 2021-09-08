interface Employee {
    pay(): void;
}
class FullTimeEmployee implements Employee {
    pay() {
        console.log('full time!!');
    };
    workFullTime(){}
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log('part time!!');
    }
    workPartTime(){}
}

//세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 똥이다. 
function payBad(employee: Employee): Employee{
    employee.pay();
    return employee;
};

// 제레닉은 어떤 타입도 들어올수 있다. 타입에 대한 정보가 없기 때문에 세부적인 조건을 달아줄수 있다. ex) extends Employee
function pay<T extends Employee>(employee: T):T{
    employee.pay();
    return employee;
};

const guard = new FullTimeEmployee();
const eddy = new PartTimeEmployee();
guard.workFullTime();
eddy.workPartTime();

const guardAfterPay = pay(guard);
const eddyAfterpay = pay(eddy);

const obj = {
    name: 'guard',
    age: 20,
};

const obj2 = {
    animal: 'dog',
};

console.log(getValue(obj, 'name')); // guard
console.log(getValue(obj2, 'animal')); // dog

// 조건부를 사용하면 제네릭을 좀 더 제한적으로 사용할 수 있다. 
// 어떤 오브젝트 타입(T)를 받는데, K라는 것은 T 오브젝트 key들 중에 하나여야 하고, 
// return 되는 것은 그 오브젝트에 있는 value타입(T[K]) 이어야 한다. 
// 어렵다..
function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key]
};