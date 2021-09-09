console.log(this);

function simpleFunc(){
    console.log(this);
}
simpleFunc();

class Counter{
    count = 0;
    // 바인딩을 해주지 않고 arrow function을 이용해 주면 바인딩이 된다. 
    increase = () => {
        console.log(this);
    }
};
const counter = new Counter();
counter.increase();
const caller = counter.increase;
// this의 정보를 잃어버리지 않게 바인딩을 해준다.
//const caller = counter.increase.bind(counter);
caller(); 

class Bob {

}
const bob = new Bob();
bob.run = counter.increase;
bob.run();