"use client"
import React, { useState, useContext, useEffect } from 'react'

import { TodoContext } from '@/context/TodoContext'

const useTodo = () => {

    const { todoData, setTodoData } = useContext(TodoContext);

    useEffect(() => {
        console.log(todoData);
    }, [todoData])

    const add = (data) => {
        setTodoData([...todoData, data])
    }

    const remove = (id) =>{
        setTodoData(todoData.filter(data => data.id === id))
    }

    return {
        todoData,
        add,
        remove
    }
}

export default useTodo