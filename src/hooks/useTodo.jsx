"use client"
import React, { useState, useContext, useEffect } from 'react'

import { TodoContext } from '@/context/TodoContext'

const useTodo = () => {

    const { todoData, setTodoData } = useContext(TodoContext);

    useEffect(() => {
    }, [])

    return {
        todoData
    }
}

export default useTodo