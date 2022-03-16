import React from "react";


export default function Item({ title, content, onRemove, item }) {

    return (
        <div className="card mb-3 col-10 col-md-6 col-lg-4">
            <div className="card-header">
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-body">
                <h6>Details :</h6>
                <p className="p-2">{content}</p>
                <div class="d-flex justify-content-around">
                    <button type="button" class="btn btn-danger" onClick={() => onRemove(item.id)}>Delete</button>
                </div>
            </div>
        </div >
    )
}