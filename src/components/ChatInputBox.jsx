import React from 'react'
import { useState } from 'react'
// import useMessage from '../hooks/useMessage'

function ChatInputBox() {

  // const { message, handleMessageChange } = useMessage();

  const [message, setMessage] = useState('')


  const handelChange = (e) => {
    setMessage(e.target.value)
  }


  const handelSubmit = () => {
    console.log(message)
  }

  return (
    <div className='fixed w-full flex items-center justify-center'>
      <input onChange={(e)=>{handelChange(e)}} type='text' placeholder='Type a message' className='border-2 border-gray-300 p-2 w-10/12 rounded-lg' />
      <button onClick={handelSubmit} className='bg-blue-500 text-white p-2 w-1/12 rounded-lg'>Send</button>
    </div>
  )
}

export default ChatInputBox