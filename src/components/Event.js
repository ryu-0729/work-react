import React, { useContext } from "react"

import { ADD_LOG, DELETE_EVENT } from '../actions'
import AppContext from "../contexts/AppContext"
import { currentTime } from "../utils"

const Event = ({ event }) => {
    const { dispatch } = useContext(AppContext)
    const id = event.id
    const handleDelete = () => {
        const result = window.confirm(`イベント(id=${id})を削除しますか？`)
        if (result) {
            dispatch({ type: DELETE_EVENT, id })

            dispatch({
                type: ADD_LOG,
                description: `イベント(id=${id})を削除しました`,
                operatedAt: currentTime(),
            })
        }
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
