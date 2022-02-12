import React, { FC, useState } from 'react'
import './App.scss'
import { ITask } from './interface';
import Todo from './Components/Todo';
const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const addTodo = (): void => {
    if (task === '') {
      alert('Please Completed Input')
      return;
    } else {
      const newTask = { taskName: task, id: Math.ceil(Math.random() * 1000), isCompleted: false }
      setTodoList([...todoList, newTask]);
      setTask('')
    }
  }

  const deleteTodo = (id: Number): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.id !== id;
      })
    );
  }

  const completeTodo = (id: Number): void => {
    const itemIndex = todoList.findIndex(i => i.id === id);
    const selectedTodo = { ...todoList[itemIndex] }
    selectedTodo.isCompleted = true;
    const updateTodo = [...todoList];
    updateTodo[itemIndex] = selectedTodo;
    setTodoList(updateTodo)
  }
  return (
    <div className="box">
      <div className="box-header">
        <div className="box-header__input">
          <input type="text" placeholder='text.....' value={task} onChange={(e) => setTask(e.target.value)} />
          <button type='submit' onClick={addTodo}>Add Todo</button>
        </div>
      </div>
      <div className="box-todo">
        {
          todoList.map((todo, index) => (
            <Todo key={index} todo={todo} onDelete={deleteTodo} onCompleted={completeTodo} />
          ))
        }
      </div>
    </div>
  )
}

export default App
