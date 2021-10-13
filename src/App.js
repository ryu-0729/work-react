import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  // カウントをリセットする
  const reset = () => setCount(0)
  //掛ける2する
  const multiplication = () => setCount(previousCount => previousCount * 2)
  // 3の倍数の時のみ3で割る
  const division = () => setCount(previousCount => {
    return previousCount % 3 === 0 ? previousCount / 3 : previousCount
  })

  return (
    <>
      <div>
        count: {count}
      </div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>

      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>

      <div>
        <button onClick={reset}>Reset</button>
      </div>

      <div>
        <button onClick={multiplication}>x2</button>
        <button onClick={division}>3の倍数のときだけ3で割る</button>
      </div>
    </>
  )
}

export default App
