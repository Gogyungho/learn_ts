{
    //Type Inference

    let text = 'hello';
    // text라는 변수는 선언함과 동시에 string이 할당되서 다른 타입을 쓸수 없다. 

    function print (message: string) {
        console.log(message);
    };

    function add(x: number, y: number){
        return x + y;
    }
    const result = add(1,2);
    // 타입을 적지 않아도 추론할수 있다. 
    //하지만 타입을 지정해 주는게 좋다. (void는 생략 가능하지만 리턴값이 있다면 명시해주는게 좋다.)
}