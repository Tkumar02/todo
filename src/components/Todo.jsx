import styles from '../style.module.css'

const Todo=({todo, todoList,setTodoList})=>{
    const deleteTodo = () => {
        setTodoList(todoList.filter((item)=>item.id !== todo.id))
    };

    return (
        <div>
            <div className={styles.todoItem}>
                <h3 className={styles.todoName}>{todo.name}</h3>
                <button onClick={deleteTodo} className={styles.deleteTodo}>Done</button>
            </div>
        </div>
    )
}

export default Todo;