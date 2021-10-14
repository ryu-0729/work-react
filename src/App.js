import React, { useState } from 'react'

const App = () => {
  const initialStates = {
    name: '',
    price: 1000,
  }

  const [state, setState] = useState({...initialStates})

  // パラメータをこれで渡せるはず
  const param = state
  console.log(param)

  const reset = () => {
    setState({...initialStates})
  }

  return (
    <>
      <p>現在の{state.name}は、{state.price}円です</p>
      <button onClick={reset}>Reset</button>

      <input value={state.name} onChange={e => setState({...state, name: e.target.value})} />

      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
    </>
  )
}

export default App
