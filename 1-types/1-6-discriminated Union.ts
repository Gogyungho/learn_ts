{
    type SuccessState = {
        result: 'success';
        response: {
            body: string;
        };
    };
    type FailState = {
        result: 'fail';
        reason: string;
    };
    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        //보통은 네크워트 통신을 하는 비동기로 처리해야되니기 때문에 아래와 같이 쓰인다. 
        // function login(id: string, password: string): Promise<LoginState> {
        return {
            result: 'success',
            response: {
                body: 'login in!',
            }
        };
    };

    function printLoginState(state: LoginState){
        if(state.result === 'success') {
            console.log(`${state.response.body}`);
        } else {
            console.log(`${state.reason}`);
        }
    };

}