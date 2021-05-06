import React, { useState, useEffect, Fragment } from 'react'
import './test.css'

const Test = () => {
  // first argument is the variable, second argument is the function to set the variable
  const [count, setCount] = useState(0)

  // ui state for hovering
  const [hover, setHover] = useState(false)

  useEffect(() => {
    console.log('we have a new count!: ', { count })
  }, [count])

  useEffect(() => {
    if (hover) {
      console.log('we hovered')
    } else {
      console.log('we left')
    }
  }, [hover])

  return (
    <Fragment>
      <div>{count}</div>
      <button
        className='red'
        onClick={() => setCount(count + 1)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >increment</button>
    </Fragment>
  )
}

export default Test
