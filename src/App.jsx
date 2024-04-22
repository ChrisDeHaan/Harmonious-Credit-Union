import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="my-4 max-w-screen-xl mx-auto grid gap-y-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
