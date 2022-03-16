import { useState } from "react";


export default function Form({ setList }) {

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState();

    const handleTitleChange = (e) => {
        setNewTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setNewContent(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setList(previousState => [...previousState, { id: Math.floor(Math.random() * 1000), title: newTitle, content: newContent }]);

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