import React, { useEffect, useReducer } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import Logs from './Logs'
import AppContext from '../contexts/AppContext'
import reducer from '../reducers'

const APP_KEY = 'appRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    logs: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  }, [state])


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container">
        <EventForm />
        <Events />
        <Logs />
      </div>
    </AppContext.Provider>
  )
}

export default App
