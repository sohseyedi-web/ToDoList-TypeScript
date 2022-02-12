import React from 'react'
import { FiCheck, FiTrash } from 'react-icons/fi';
import { ITask } from './../interface';

interface Props {
    todo: ITask;
    onDelete(id: Number): void;
    onCompleted(todoItem: Number): void;
}

const Todo = ({ todo, onDelete, onCompleted }: Props) => {
    return (
        <div className="box-todo__list" key={todo.id}>
            <div className={todo.isCompleted ? "box-todo__list-text text-completed" : "box-todo__list-text"}>{todo.taskName}</div>
            <div className="box-todo__list-action">
                <span onClick={() => onDelete(todo.id)}><FiTrash size={22} /></span>
                <span><FiCheck size={22} onClick={() => onCompleted(todo.id)} /></span>
            </div>
        </div>
    )
}

export default Todo