import React from 'react'
import HomePage from './components/HomePage'
import Features from './components/Features'
import LiveOceanData from './components/LiveOceanData'
import HowItWorks from './components/HowItWorks'
import ChatInterface from './components/ChatInterface'

const App = () => {
  return (
    <>
      <HomePage/>
      <Features/>
      <LiveOceanData/>
      <HowItWorks/>
      <ChatInterface/>
    </>
  )
}

export default App