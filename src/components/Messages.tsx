import * as React from 'react';
import { TodosType } from '../types/type';

type Props = {
    todos: TodosType[],
    deleteMessage:(id: number)=>void
}

const Messages: React.FC<Props> = ({ todos, deleteMessage }) => {
    return (<div>
        {
            todos.map((todo, i) =>
            (<div key={i}>
                {todo.id}. {todo.message} - 
                <span style={{cursor: "pointer"}} 
                onClick={()=>{
                    console.log(todo.id)
                    deleteMessage(todo.id)}}> x</span>
            </div>)
            )
        }

    </div>);
}

export default Messages;