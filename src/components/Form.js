import { useEffect, useState } from "react";


export default function Form({ setList, list }) {
    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');



    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setNewContent(e.target.value)
    }


    const askIfTasksOk = () => {
        const completed = list.filter(item =>
            item.isComplete === true
        )
        if (completed.length < 3) {
            alert('Finish tasks !')
            return false
        }
        return true
    }

    const handleSubmit = (event) => {
        event.preventDefault();


        askIfTasksOk();
        // if (completed.length < 3) {

        //     alert('finish fist !')
        //     return
        // }

        setList(previousState => [...previousState, {
            id: Math.floor(Math.random() * 1000),
            title: newTitle,
            content: newContent,
            isComplete: false
        }]);

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