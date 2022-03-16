import React, { useState } from "react";


export default function Item({ title, content, onRemove, item }) {
    const [check, setCheck] = useState(false)

    const handleCheck = () => {
        setCheck(prevCheck => !prevCheck)
    }

    return (
        <div className="card mb-3 col-10 col-md-6 col-lg-4" style={{
            color: !check ? "black" : "grey"
        }}>
            <div className="card-header row justify-content-between g-0" style={{
                backgroundColor: !check ? "whitesmoke" : "white"
            }
            }>
                <h3 className={!check ? "col" : "text-decoration-line-through col"}>{title}</h3>
                <div className="col row justify-content-between">
                    <label className="text-center">Mark{!check ? " finished" : " unfinished"}
                    </label>
                    <input type="checkbox" className="btn btn-success" onClick={handleCheck} />
                </div>
            </div>

            <div className="card-body">
                <h6 className={!check ? "" : "text-decoration-line-through"}>Details :</h6>
                <p className={!check ? "p-2" : "text-decoration-line-through p-2"}>{content}</p>
                <div class="d-flex justify-content-around">
                    <button type="button" className="btn btn-danger" onClick={() => onRemove(item.id)}>Delete</button>
                </div>
            </div>
        </div >
    )
}