"use client"
import React, { useState, useContext, useEffect } from 'react'

import { TodoContext } from '@/context/TodoContext'

const useTodo = () => {

    const { data, setData } = useContext(TodoContext);

    const add = (data) => {

        setData(data)
        localStorage.setItem("todoData", JSON.stringify(data))
    }

    const remove = (id) => {
        setData(data.filter(data => data.id !== id))
        localStorage.setItem("todoData", data.filter(data => data.id !== id))
    }


    return {
        data,
        add,
        remove,
    }
}

export default useTodo