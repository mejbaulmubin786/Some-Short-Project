import React from 'react'

const card = ({title, text, buttonText, design}) => {
 // if i use (props) as a paramitter let {title, text, buttonText} = props

  return (
    <>
      <div className={design}>
        <h1>{title}</h1>
        <p>{text}</p>
        <button className='button'>{buttonText}</button>
      </div>
    </>
  )
}

export default card