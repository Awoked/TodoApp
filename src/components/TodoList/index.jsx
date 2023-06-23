"use client"
import useTodo from '@/hooks/useTodo';
import React, { useState, useEffect } from 'react'

import { BsPlus, BsCheck } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";

import { v4 as uuidv4 } from "uuid";

const TodoList = async ({ status }) => {

    const { data: todoData, add: addTodo, remove: removeTodo } = useTodo();

    const [todoText, setTodoText] = useState("");

    const addTodoHandler = (e) => {
        e.preventDefault();
        setTodoText("");
        addTodo([...todoData, {
            id: uuidv4(),
            content: todoText,
            status: "todo"
        }])

    }

    const todoStatusHandler = (id, status) => {
        const updatedData = todoData.map(data => {
            if (data.id === id) {
                return {
                    ...data,
                    status: status === "todo" ? "started" : status === "started" ? "done" : data.status
                };
            }
            return data;
        });
        addTodo(updatedData);
    };


    // const mongoClient = new MongoClient('mongodb+srv://alperksy3434:ftfMdHVLGL9qk9XU@alperdatabase.xr7hjdn.mongodb.net/todo?retryWrites=true&w=majority');
    // const collection = mongoClient.db().collection('todo');
    // const data = await collection.find().toArray();
    // const addData = async () => {
    //     const result = await collection.insertOne({ name: "deneme", todoContent: "test4" })
    //     console.log(result)
    // }

    return (
        <>
            <div className="border rounded-md p-4 flex flex-col gap-y-4">
                {/* <button onClick={addData}>add</button>  */}

                <header className="border-b border-dashed pb-4">
                    <p>
                        <strong className={`font-bold text-3xl ${status === "started" ? "text-yellow-300" : status === "done" && "text-green-500"}`}>
                            {
                                status === "todo" ? "Yapılacaklar"
                                    : status === "started" ? "Yapılıyor"
                                        : status === "done" ? "Tamamlandı"
                                            : "Todo"
                            }
                        </strong>
                    </p>
                </header>

                {
                    status === "todo" &&
                    <form onSubmit={addTodoHandler}>
                        <div className="flex rounded-md overflow-hidden">

                            <input
                                type="text"
                                className="flex-1 text-gray-800 px-4"
                                placeholder="Listeye ekle"
                                onChange={e => setTodoText(e.target.value)}
                                value={todoText}
                            />
                            <button className="flex items-center justify-center py-1.5 w-12 h-8 bg-green-500">
                                <BsPlus
                                    size={28}
                                />
                            </button>

                        </div>
                    </form>
                }

                <ul className="flex flex-col gap-y-4">
                    {
                        todoData.length > 0 &&
                        todoData.map((data, index) => (
                            data.status === status && (
                                <li
                                    key={index}
                                    className="flex items-center justify-between"
                                >
                                    <p>
                                        {data.content}
                                    </p>
                                    <div className="flex gap-2 text-lg">

                                        <button
                                            onClick={() => todoStatusHandler(data.id, data.status)}
                                            className={`border w-8 h-8 grid place-items-center ${status === "todo" ? "border-yellow-300 text-yellow-300" : status === "started" ? "border-green-500 text-green-500" : "hidden"}`}
                                        >
                                            {
                                                data.status !== "started" ?
                                                    <AiOutlineRight />
                                                    :
                                                    <BsCheck
                                                    />
                                            }
                                        </button>

                                        <button
                                            className={`border w-8 h-8 grid place-items-center border-red-500 text-red-500`}

                                            onClick={() => removeTodo(data.id)}
                                        >
                                            <IoIosClose />
                                        </button>
                                    </div>
                                </li>
                            )
                        ))

                    }
                </ul>
            </div>
        </>
    )
}

export default TodoList