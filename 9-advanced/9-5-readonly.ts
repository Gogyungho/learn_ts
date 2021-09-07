{
    //읽을수만 있는 타입
    type ToDo = {
        title: string;
        description: string;
    };

    function display(todo: Readonly<ToDo>) {
        todo.title = 'go';
        // readonly를 사용하면 수정이 불가능
    }
}