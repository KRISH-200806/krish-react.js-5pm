import React from 'react'
import CounterButtons from './CounterButtons'
import CounterValue from './CounterValue'

function Counter() {
  return (
    <div style={{color:"white",marginTop:"50px",width:"500px",paddingTop:"100px",paddingBottom:"100px",margin:"auto"}}>
      <CounterValue />
      <CounterButtons />
    </div>
  )
}

export default Counter
