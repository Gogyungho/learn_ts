{
    // Javascrpit
    function jsAdd(num1, num2){
        return num1 + num2;
    }
    //Typescript
    function add(num1: number, num2: number):number {
        return num1 + num2;
    }

    //Javascript 
    function jsFetchNum(id){
        // code ...
        return new Promise((resolve, reject)=> {
            resolve(100);
        });
    }
    //Typescript 
    function fetchNum(id: string):Promise<number>{
        // code ...
        return new Promise((resolve, reject)=> {
            resolve(100);
        });
    }
    // id를 받아서 promise를 리턴하고, promise는 패치가 완료된 다음에 숫자 데이터를 리턴한다는 것을 알 수 있다.

    //Javascript  => Typescript
    // 1. Optional parameter
    // '?'가 들어가는 인자의 의미는 전달 받을수도 있고, 아닐수도 있다. or의 의미이다. 
    function printName (firstName: string, lastName?: string){

        console.log(firstName);
        console.log(lastName);
    };
    printName('steve', 'jobs');
    printName('go'); // ?가 쓰인 인자.
    printName('kim', undefined);

    //default parameter
    function printMessage(message: string = 'default message'){
        console.log(message);
    }
    printMessage();
    // 함수를 호출하면서 아무런 인자도 전달하지 않으면 당연히 에러가 발생하지만 
    // default message를 작성하면 인자가 없는 경우 default message가 찍힌다.

    //Rest parameter
    function addNumbers(...numbers: number[]): number{
        return numbers.reduce((a, b) => a + b)
    }
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3));
    console.log(addNumbers(1,2,4,5));
    // 인자의 모든 값을 더하는데 spread를 이용해서 배열로 받아와서 사용한다.
}