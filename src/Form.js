import React,{useState} from 'react';

const Form =({addTodo})=>{
    const [text,setText]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.length===0){
            alert("文字列が空だぜ！！！");
            return;
        }
        addTodo(text);
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
            <button type="submit">登録</button>
        </form>
    );
};

export default Form;