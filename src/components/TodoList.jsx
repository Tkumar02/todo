import Todo from "./Todo";

const TodoList = ({todoList,setTodoList}) => {
    return (
        <div>
            {todoList.map((todo,index)=>(
            <Todo todo={todo} key={todo.id} todoList={todoList} setTodoList={setTodoList}/>))}
        </div>
    )
}

export default TodoList;