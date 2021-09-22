import React from 'react';

interface TodosListProps{
    title: string,
    done: boolean
}


const TodosList = ({title , done}:TodosListProps) =>{
    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default TodosList;