import { useTasks } from "@/context/TasksContext";
import { useRouter } from "next/navigation"
import toast from "react-hot-toast";

export const TaskCard = ({ task }) => {

    const router= useRouter();
    const {deleteTask} = useTasks()

    return (
        <div className="bg-gray-700 hover:bg-slate-600 px-20 py-5 m-2">
            <div className="flex justify-between">
                <h1>{task.title}</h1>
                <div className="flex gap-x-2">
                    <button
                        className="bg-blue-500 hover:bg-blue-400 px-3 py-1 inline-flex items-center"
                        onClick={() => router.push(`/edit/${task.id}`)}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center" 
                        onClick={() => {
                            const accept = window.confirm("are you sure?")
                            if(accept) {
                                deleteTask(task.id);
                                toast.success("Task deleted successfully")
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            </div>
            <p className="text-gray-300">{task.description}</p>
            <span className="text-gray-400 textxs">{task.id}</span>
        </div>
    )
}