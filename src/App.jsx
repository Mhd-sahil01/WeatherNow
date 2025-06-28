import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
        <h1 className='text-center text-cyan-300 text-3xl'>Hello</h1>
      </div>
    </>
  )
}

export default App