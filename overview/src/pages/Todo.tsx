import React, { FormEvent, useState } from 'react'
import { Todo } from '../models/ITodos'
import { addTodo } from '../services/todoService'
import { useDispatch, useSelector } from 'react-redux'
import { TodoAction } from '../useRedux/TodoAction'
import { TodoType } from '../useRedux/TodoType'
import { StateType } from '../useRedux/store'

function TodoPage() {

  // use redux
  const dispatch = useDispatch()
  const todos = useSelector((item: StateType) => item.TodoReducer)

  const [todo, setTodo] = useState('')
  const sendForm = (evt: FormEvent) => {
    evt.preventDefault()
    const sendItem: Todo = {
        id: 0,
        todo: todo,
        completed: true,
        userId: 5
    }
    addTodo(sendItem).then(res => {
        const item = res.data
        item.id = Math.floor( Math.random() * 100 )
        const sendObj: TodoAction = {
            type: TodoType.TODO_ADD,
            payload: item
        }
        dispatch(sendObj)
    })
  }

  const deleteTodo = (item: Todo) => {
    const sendObj: TodoAction = {
        type: TodoType.TODO_REMOVE,
        payload: item
    }
    dispatch(sendObj)
  }

  return (
    <>
        <form onSubmit={sendForm} className='form-inline col-4 mt-3 mb-3'>
            <div className='mb-3'>
                <input onChange={(evt) => setTodo(evt.target.value) } className='form-control' placeholder='Todo' />
            </div>
            <button className='btn btn-success'>Add</button>
        </form>

        <div className='row'>
            {todos.map((item, index) => 
                <div key={index} className="card col-sm-3">
                    <div className="card-body">
                    <h5 className="card-title">{item.todo}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{item.id}</h6>
                    <button onClick={() => deleteTodo(item)} className='btn btn-danger btn-sm' style={{position: 'absolute', bottom: 5, right: 5}} ><i className="bi bi-trash3"></i></button>
                    </div>
              </div>
            )}
        </div>

    </>
  )
}

export default TodoPage