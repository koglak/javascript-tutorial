import React, { useState } from 'react';
import './App.css';
import Input from './components/input';
import { TodosType } from './types/type';
import Messages from './components/Messages';

import 'bootstrap/dist/css/bootstrap.min.css';


const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  // const [todos, setTodos] = useState<string[]>([])
  const [todos, setTodos] = useState<TodosType[]>([])


  const addMessage = () => {
    if(todo) setTodos([...todos, {message: todo, id: todos.length+1}])
    setTodo('')
  }

  const deleteMessage = (id: number) => {
      setTodos(todos.filter(td => td.id !== id))
  }


  return (
    <div className="App">
      <h5>JavaScript Tutorial</h5>
      <Input todo={todo} setTodo={setTodo} addMessage={addMessage}/>
      <Messages todos={todos} deleteMessage={deleteMessage}/>
    
    </div>
  );
}

export default App;
