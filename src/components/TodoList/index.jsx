import useTodo from '@/hooks/useTodo';
import React, { useState } from 'react'

import { BsPlus } from "react-icons/bs";

const TodoList = ({ status }) => {

  const { todoData, add: addTodo } = useTodo();

  const [todoText, setTodoText] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo({
      id: 2,
      content: todoText
    })

  }

  return (
    <>
      <div className="border rounded-md p-4 flex flex-col gap-y-4">
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
              />
              <button className="p-3 py-1.5 bg-green-500">
                <BsPlus
                  size={28}
                />
              </button>

            </div>
          </form>
        }

        <ul className="flex flex-col gap-y-4">
          <li>
            ---
          </li>
        </ul>
      </div>
    </>
  )
}

export default TodoList