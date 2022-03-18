import { useEffect, useState } from "react";


export default function Form({ setList, list }) {
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');
    const [completedTasks, setCompletedTasks] = useState([])




    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setNewContent(e.target.value)
    }


    const getCompletedTasks = () => {

        if (list) {
            const completed = Array.isArray(list) ? list.filter(item =>
                item.isComplete === true
            ) : [];

            console.log(completed)
            setCompletedTasks(completed)

        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        getCompletedTasks();

        if ((completedTasks.length >= 0 && completedTasks.length <= 2) || (completedTasks.length < 3)) {

            alert('Finis avec tout le bordel !')

        } else {

            setList(previousState => [...previousState, {
                id: Math.floor(Math.random() * 1000),
                title: newTitle,
                content: newContent,
                isComplete: false
            }]);
            setCompletedTasks([])
        }


        cleanForm();
    }

    const cleanForm = () => {
        setNewContent("");
        setNewTitle("");
    }






    return (

        <form className="form my-5 w-50 m-auto text-center" onSubmit={handleSubmit}>
            <label>Task : </label>
            <input type="text" value={newTitle} className="form-control" onChange={handleTitleChange} />
            <label>Details : </label>
            <textarea type="text" value={newContent} cols="5" rows="5" className="form-control" onChange={handleContentChange} />

            <button className="btn btn-primary mt-3">Add</button>

        </form>
    )
}