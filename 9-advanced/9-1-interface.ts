// interface 는 어떤 것에 규격 사항 , obj와 obj가 소통할 때 정해진 interface를 통해서 서로 상호작용을 할 수 있게 도와줌
// 특정한 규격을 정해놓고, 어떤 것이 구현되는 거라면 type 보단 interface를 써야한다. 

// Type 데이터를 다룰때 어떤 데이터를 담을지 데이터의 타입을 결정해 주는것 
// 구현이 목적이 아니라 데이터를 담으려는 목적일 경우 사용한다. 

type PositionType = {
    x : number;
    y : number;
};

interface PositionInterface {
    x : number;
    y : number;
};

interface PositionInterface {
    z : number;
}

// object
const obj1 : PositionType = {
    x : 1,
    y : 2,
};
const obj2 : PositionInterface = {
    x : 1,
    y : 3,
    z : 4,
};

// class
class Pos1 implements PositionType {
    x : number;
    y : number;
}
class Pos2 implements PositionInterface {
    x : number;
    y : number;
    z : number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
    z: number;
}
type ZPositionType = PositionType & { z:number };

// only interfaces can be merged. 
interface PositionInterface {
    z : number;
}

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}
type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right';