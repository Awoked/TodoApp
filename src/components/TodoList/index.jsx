import React from 'react'

import { BsPlus } from "react-icons/bs";

const TodoList = ({ status, todosData }) => {
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
          <form>
            <div className="flex rounded-md overflow-hidden">

              <input
                type="text"
                className="flex-1 text-gray-800 px-4"
                placeholder="Listeye ekle"
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