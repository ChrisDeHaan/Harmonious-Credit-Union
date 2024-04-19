import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <section className="m-12 grid grid-cols-1 gap-14 items-center">
        <p className="text-3xl font-bold underline text-center bg-indigo-100">
          temp body
        </p>
        <p className="text-3xl font-bold underline text-center bg-indigo-100">
          temp body
        </p>
        <p className="text-3xl font-bold underline text-center bg-indigo-100">
          temp body
        </p>
      </section>
      <Footer />
    </>
  )
}

export default App
