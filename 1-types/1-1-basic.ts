{
/**
 * Javascript 에는 크게 두가지 타입이 있다.
 * 1. Primitive : number, string, boolean, bigint(더큰 숫자타입), symbol, null. undefined
 * 2. Object : function, array.... 
 * typescript에서 변수를 선언할때 조금더 엄격하게 타입을 정의하고 한번 정의된 타입에는 다른 타입의 데이터는 넣을 수 없다.
*/

//number
const num:number = 1; //정수나 소수점 마이너스값도 가능

//string
const str:string = 'a';

//boolean
const boal:boolean = true;

//udefined 값이 아직 들어오지 않아 비어있는 것
let name: undefined; // 이렇게 안씀
let age: number | undefined; // '|' -> or 의미 
age = 1;
age = undefined;
function find(): number | undefined{
    return undefined;
}

//null 완전히 비어있는것
let person: null; // 단독으로 사용하지 않는다.
person = null;
let person2 : string | null;

// 보편적으로 undefined로 많이 사용한다. 
// 하지만 값이 있더나 없다는것을 나타낼때는 문맥상 null을 사용하는게 맞다.

// unknown 쓰지말것.
// 타입이 없는 javascript와 연동해서 쓸수 있기 때문에 존재함
// ts에서 js 라이브러리를 사용하는 경우에 리턴하는 타입을 모를경우. 그래도 타입을 지정해서 쓰는게 좋다. 
let notSure: unknown = 0; //어떤 종류의 타입을 담을지 알수 없는 경우. 그래서 어떠한 데이터를 담을수 있다. 
notSure = 'hi';
notSure = true;
 
//any 쓰지말것. 어떤 타입이든 다 담을수 있어서 별루
let anything: any = 0;
anything = 'hi';
// unknown과 any는 쓰지말것.

//void 함수에서 리턴값이 없을때. 생략할수있다.
function print():void {
    console.log('hello');
    return;
}

//never 함수에서 절대 리턴하지 않는 경우에 명시하기 위해 사용한다.
function throwError(message):never {
    throw new Error(message);
    //이렇게 에러를 던지는 경우에 리턴값이 없기 때문에 사용한다.
}

//object 쓰지말것.
//모든 object타입을 설정할수 있고, 배열도 전달 할 수 있다.
let obj: object;
function acceptSomeObject(obj: object){}
acceptSomeObject({name: 'go'});
acceptSomeObject({fruit: 'apple'});
}