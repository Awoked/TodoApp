"use client"
import TodoList from '@/components/TodoList'
import useTodo from '@/hooks/useTodo'

export default function Home() {
    const { todoData } = useTodo();

    return (
        <>
            <section className="py-4">
                <div className="container">
                    <div className="todos-wrapper grid grid-cols-3 gap-3">
                        <TodoList
                            status={"todo"}
                        />
                        <TodoList
                            status={"started"}
                        />
                        <TodoList
                            status={"done"}
                        />
                    </div>
                </div>

            </section>
        </>
    )
}
