import styles from '../style.module.css'
import shortid from 'shortid'

const Form = ({todo, setTodo, todoList, setTodoList})=> {
    const handleChange = (event) => {
        setTodo(event.target.value)
    }

    const addTasks = (event) => {
        event.preventDefault();
        setTodoList([...todoList,{name:todo, id:shortid.generate()}])
        //console.log(todoList)
        setTodo('')
    }

    return (
        <div className={styles.todoform}>
            <form onSubmit={addTasks}>
                <input className={styles.todoinput}
                type="text" 
                placeholder="Add To-do Item Here"
                value = {todo}
                onChange={handleChange}
                />
                <button type='submit' className={styles.todobutton}>Add Task</button>
            </form>
        </div>
    )
}

export default Form