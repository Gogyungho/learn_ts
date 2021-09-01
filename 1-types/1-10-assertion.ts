{
    //Type Assertions : 지양할것

    function jsStrFunc(): any{
        return 'hi'; 
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    // 타입이 100% 화신하지 않는 경우에는 사용하지 말것 

    function findNumbers() : number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2);
    // '!'를 작성하면 100% 확신할때
}