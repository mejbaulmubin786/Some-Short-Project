import React from 'react'

const card = (props) => {

  return (
    <>
      <div className='main'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <button className='button'>{props.buttonText}</button>
      </div>
    </>
  )
}

export default card