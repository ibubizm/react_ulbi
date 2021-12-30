import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count + 1)
  }

  const dec = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  )
}
