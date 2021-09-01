{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const scoroes: Array<number> = [1,2,3];
    function printArray(fruits: readonly string[]){
        //주어진 데이터를 업데이트 하거나 변경하는것을 막을떄 readonly를 사용한다. 
    }
    
    // Tuple -> interface, type alias, class로 대체해서 사용한다.
    // 서로 다른 타입의 데이터를 담을 수 있다. 하지만 사용을 권장하진 않는다.
    let student: [string, number];
    student = ['name', 123];
    const [name, age] = student;
}           