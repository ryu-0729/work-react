import React from "react"

const Event = ({dispatch, event}) => {
    const id = event.id
    const handleDelete = () => {
        dispatch({ type: 'deleteEvent', id })
    }
    return (
    <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button type="button" className="btn btn-danger" onClick={handleDelete}>削除</button></td>
    </tr>
    )
}

export default Event
