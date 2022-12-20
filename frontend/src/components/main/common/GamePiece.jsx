import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const GamePiece = () => {
  return (
    <div className='mt-2'>
        <p className='text-sm text-gray-600'>Your piece</p>
        <AiOutlineClose className='text-6xl ml-3 mt-1 text-blue-700'/>
    </div>
  )
}

export default GamePiece