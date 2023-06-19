"use client"
import React, { createContext, useContext, useState } from 'react'

const TodoContext = createContext(null);

const TodoContextProvider = ({ children }) => {
    const [todoData, setTodoData] = useState([
        {
            id: 1,
            content: "Yapılacak liste içeriği"
        }
    ]);


    return (
        <TodoContext.Provider value={{ todoData, setTodoData }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext };