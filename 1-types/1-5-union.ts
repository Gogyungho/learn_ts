{
    // Union Types : OR
    
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move (direction: Direction){
        console.log(direction);
    };
    move('down');
    
    type TileSize = 8 | 10 | 17;
    const tile: TileSize = 10;
    // 발생할 수 있는 모든 타입중에 하나만 사용할 수 있다.
    //활용도가 높다.

    // function : login -> success, fail
    type SuccessState = {
        response: {
            body: string;
        };
    };
    type FailState = {
        reason: string;
    };

    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        //보통은 네크워트 통신을 하는 비동기로 처리해야되니기 때문에 아래와 같이 쓰인다. 
        // function login(id: string, password: string): Promise<LoginState> {
        return {
            response: {
                body: 'login in!',
            }
        }
    };

    function printLoginState(state: LoginState){
        if('response' in state) {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    };
}