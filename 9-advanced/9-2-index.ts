{
    const obj = {
        name : 'ella',
    }
    obj.name; // ella
    obj['name'] // ella

    type Animal = {
        name : string;
        age : number;
        gender: 'male' | 'female';
    };
    type Name = Animal['name'] // string
    const text : Name = 'hello';

    type Gender = Animal['gender']; // 'male' | 'femali'

    type Keys = keyof Animal; // 'name' | 'age' | 'gender'
    const key : Keys = 'gender';

    type Person = {
        name: string,
        gender: Animal['gender'],
    }
    const person: Person = {
        name: 'go',
        gender: 'female',
    }
}