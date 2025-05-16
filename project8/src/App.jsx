import React from 'react'

import Card from './components/card'

const App = () => {
  return (
    <>
      <Card title="This is One" text="This is One Text" buttonText="This is One"/> 
      <Card title="This is Two" text="This is Two Text" buttonText="This is Two"/>
      <Card title="This is Three" text="This is Three Text" buttonText="This is Three"/>
      <Card title="This is Four" text="This is Four Text" buttonText="This is Four"/>
      <Card title="This is Five" text="This is Five Text" buttonText="This is Five"/>
    </>
  )
}

export default App