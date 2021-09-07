{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    // partial은 type 중에서 부분적인 것만 허용하고 싶을때 사용한다. 
    // ToDo에서 부분적인 것만 받을수 있다. 
    function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { 
            ...todo, ...fieldsToUpdate
        };
    }
    const todo: ToDo = {
        title : 'learn Typescript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    }
    const updated = updateToDo(todo, {title: 'hi'});

}