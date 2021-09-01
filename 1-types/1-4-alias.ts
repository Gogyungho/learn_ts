{
    // Type Aliases

    type Text = string;
    const name: Text = 'go';
    const address: Text = 'korea';

    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name : 'go',
        age : 1,
    }

    // String Literal Types 
    //타입을 문자열로 설정할수 있다.
    type Name = 'name';
    let goName: Name;
    goName = 'name';
    
    type JSON = 'json';
    const json: JSON = 'json';
}