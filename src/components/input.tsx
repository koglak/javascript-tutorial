import { useState } from "react";
import * as React from 'react';

type IProps = {
    todo: string,
    setTodo:  React.Dispatch<React.SetStateAction<string>>
    addMessage: ()=> void
}


const Input: React.FC<IProps> = ({todo, setTodo, addMessage}) =>{


    return ( 
    <div>
        <input type="text"
        onChange={(e)=>setTodo(e.currentTarget.value)}
         value={todo} placeholder='Yazınız'/>
        <button onClick={addMessage}>Ekle</button>
    </div> 
    );
}

export default Input;