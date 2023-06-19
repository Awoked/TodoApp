"use client"
import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
    const [todoData, setTodoData] = useState([]);


    return (
        <TodoContext.Provider value={{ todoData, setTodoData }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext };