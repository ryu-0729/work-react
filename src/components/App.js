import React, { useReducer, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Event from './Event'
import reducer from '../reducers'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'createEvent',
      title,
      body,
    })

    setTitle('')
    setBody('')
  }

  const deleteAll = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを削除しますか？')
    if (result) dispatch({ type: 'deleteAllEvents' })
  }

  const creatable = title === '' || body === ''

  return (
    <div className="container">
      <h4>イベント作成</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={creatable}>イベント作成</button>
        <button className="btn btn-danger" onClick={deleteAll}disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>

      <h4>一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />)) }
        </tbody>
      </table>
    </div>
  )
}

export default App
