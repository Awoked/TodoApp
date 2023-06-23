
import TodoList from '@/components/TodoList'
import { MongoClient } from 'mongodb'

export default async function Home() {

    const mongoClient = new MongoClient('mongodb+srv://alperksy3434:ftfMdHVLGL9qk9XU@alperdatabase.xr7hjdn.mongodb.net/todo?retryWrites=true&w=majority');
    const collection = mongoClient.db().collection('todo');
    const data = await collection.find().toArray();
    console.log(data);



    return (
        <>
            <section className="py-4">
                <div className="container">
                    {
                        data.length > 0 &&
                        data.map((data, index) => (
                            <div key={index}>
                                {data.name}
                            </div>
                        ))
                    }
                    <div className="todos-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
