{
    function checkNotNullBad(arg: number | null): number{
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    };

    function checkNotNullAnyBad(arg: any | null): any{
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    };

    function checkNotNull<T>(arg: T | null): T {
        // generic함수 T 를 이용하면 사용하는 사람이 타입을 정할수 있다. 유연하고 타입을 보장 받을수 있다. 
        if(arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    const number = checkNotNull(123);
    const boal: boolean = checkNotNull(true);
}