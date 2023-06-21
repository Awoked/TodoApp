"use client"
import React, { useState, useContext, useEffect } from 'react'

import { TodoContext } from '@/context/TodoContext'

const useTodo = () => {

    const { data, setData } = useContext(TodoContext);

    useEffect(() => {
        console.log(data);
    }, [data])

    const add = (data) => {
        setData([...data, data])
    }

    const remove = (id) =>{
        setData(data.filter(data => data.id === id))
    }

    return {
        data,
        add,
        remove
    }
}

export default useTodo