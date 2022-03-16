import React, { useState } from "react";


export default function Item({ title, content, onRemove, item }) {
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(prevCheck => !prevCheck)
    }

    return (
        <div className="card mb-3 col-12 m-auto w-50 p-3" style={{
            backgroundColor: !check ? "whitesmoke" : "white",
            color: !check ? "black" : "grey"
        }}>
            <div className="row justify-content-between g-0">
                <h3 className={!check ? "col" : "text-decoration-line-through col"}>{title}</h3>
                <div className="col row justify-content-between">
                    <label className="text-center">Mark{!check ? " finished" : " unfinished"}
                    </label>
                    <input type="checkbox" className="btn btn-success" onClick={handleCheck} />
                </div>
                <h6 className={!check ? "" : "text-decoration-line-through"}>Details :</h6>
                <p className={!check ? "p-2" : "text-decoration-line-through p-2"}>{content}</p>
                <div class="d-flex justify-content-around">
                    <button type="button" className="btn btn-danger" onClick={() => onRemove(item.id)}>Delete</button>
                </div>
            </div>


        </div >
    )
}