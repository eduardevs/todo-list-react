import React from "react"
import Item from "./Item"

export default function ListItem({ list, onRemove }) {

    return (
        <div className="row g-0">
            {list && list.map((item) =>
                <Item title={item.title} content={item.content} key={item.id} item={item} onRemove={onRemove} />
            )}
        </div>
    )
}