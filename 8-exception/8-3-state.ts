{
    type NetworkErrorState = {
        result: 'fail';
        reason: 'offline' | 'down' | 'timeout';
    }
    type SuccessState = {
        result: 'success';
    };
    type ResultState = SuccessState | NetworkErrorState;
    class NetworkClient {
        tryConnect(): ResultState {
        }
    }

    class UserService {
        constructor(private client: NetworkClient) {}

        login(){
            try{
                this.client.tryConnect();
            } catch (e){
                // try ... catch 에 전달되는 error는 any 타입이다. 
                console.log(e);
            }
        }
    }


    class App {
        constructor(private userService: UserService){}
        run(){
            try {
                this.userService.login();
            } catch (e){
                // show dialog to user
            }
        }
    }
    // 에러는 가급적 예상하지 못한 곳에서 에러가 발생할 때 사용하는 것이 좋다. 
    // 세부적인 에러를 결정하고 싶을 떄는 ErrorState를 사용하는 것이 좋다. 

    const client = new NetworkClient();
    const service = new UserService(client);
    const app = new App(service);
    app.run();
}