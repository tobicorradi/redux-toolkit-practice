import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()

    return (
      <section>
          <h1>Counter made with Redux Toolkit</h1>
          <p>{count}</p>
          <div>
              <button onClick={() => dispatch(increment())}>+</button>
              <button onClick={() => dispatch(decrement())}>-</button>
          </div>
      </section>
    )
}

export default Counter