import { useState } from 'react'

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LearnMoreContainer from './components/LearnMoreContainer/WithoutImage'
import LearnMoreContainerWithImage from './components/LearnMoreContainer/WithImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main className="my-4 max-w-screen-xl mx-auto">
        <section className='grid md:grid-cols-2 gap-5 mx-4'>
          <div className='grid gap-5'>
            <LearnMoreContainer />
            <LearnMoreContainer />
          </div>
          <div className=''>
            <LearnMoreContainerWithImage />
          </div>
        </section>
        <section>
          <p>put 3 boxes with outside links here</p>
        </section>
        <section>
          <p>put image next to QR code to somewhere here</p>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
