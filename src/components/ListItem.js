import React from "react"
import Item from "./Item"

export default function ListItem({ list, onRemove, setStatus, status, handleUpdate }) {

    return (
        <div>
            {list && list.map((item) =>
                <Item title={item.title} content={item.content} key={item.id} item={item} onRemove={onRemove} status1={item.status} status={status} setStatus={setStatus} handleUpdate={handleUpdate} />
            )}
        </div>
    )
}