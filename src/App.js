import React,{useState} from 'react';
import {nanoid} from 'nanoid';

import Title from './Title';
import List from './List';
import Form from './Form';

const App=()=>{
    console.log('Appが実行されました');
    //stateを使うやり方
    const [name,setName]=useState('matsuoka');
    const changeName=()=>{
        setName('yokoyama');
    };
    const [isDone,setIsDone]=useState(false);
    const [todos,setTodos]=useState([
        {
            content:'掃除をする',
            id:nanoid(),
            isDone:false

        },
        {
            content:'洗濯をする',
            id:nanoid(),
            isDone:false
        },
        {
            content:'料理をする',
            id:nanoid(),
            isDone:false
        },
        {
            content:'運動をする',
            id:nanoid(),
            isDone:false
        }
    ])
    const addTodo=(text)=>{
        setTodos([...todos,{content:text,id:nanoid()}])
    }

    const deleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!==id))
    };
    
    const changeIsDone=(id)=>{
        setTodos(
            todos.map((todo)=>{
                if(todo.id===id){
                    return{
                        ...todo,
                        isDone:!todo.isDone,
                    };
                }else{
                    return todo;
                }
            })
        );
    };

    //stateを使わない書き方
    // let name='matsuoka'
    // const changeName=()=>{
    //     name='yokoyama';
    //     console.log(name);
    // };
    return (
        <React.Fragment>
            <Title user={name}/>
            <List deleteTodo={deleteTodo} todos={todos} changeIsDone={changeIsDone}/>
            <Form addTodo={addTodo}/>
            <button onClick={changeName}>名前変更ボタン</button>
        </React.Fragment>
    );
};

export default App;
