"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'

const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {


    const [todoData, setTodoData] = useState([]);

    useEffect(() => {
        const lStorageTodoData = localStorage.getItem("todoData")
        if (lStorageTodoData !== null && lStorageTodoData.length > 0) {
            setTodoData(JSON.parse(lStorageTodoData));
        }
    }, [])

    return (
        <TodoContext.Provider value={{ data: todoData, setData: setTodoData }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext };