import React, { useState } from "react";


export default function Item({ title, content, onRemove, item, status, setStatus, handleUpdate }) {



    return (
        <div className="card mb-3 col-12 m-auto w-50 p-3" style={{
            backgroundColor: !status ? "whitesmoke" : "white",
            color: !status ? "black" : "grey"
        }}>
            <div className="row justify-content-between g-0">

                <h3 className={!status ? "col" : "text-decoration-line-through col"}>{title}</h3>

                <div className="col row justify-content-between">
                    <label className="text-center">Mark{!status ? " finished" : " unfinished"}
                    </label>
                    <input type="checkbox" className="btn btn-success" onClick={() => handleUpdate(item.id)} />
                </div>

                <h6 className={!status ? "" : "text-decoration-line-through"}>Details :</h6>

                <p className={!status ? "p-2" : "text-decoration-line-through p-2"}>{content}</p>

                <div class="d-flex justify-content-around">
                    <button type="button" className="btn btn-danger" onClick={() => onRemove(item.id)}>Delete</button>
                </div>
            </div>


        </div >
    )
}