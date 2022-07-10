import React from 'react'
import { Left } from './Left'
import { Login } from './Login'
import { Right } from './Right'

export const HomePage = () => {
  return (
    <div className='grid grid-cols-2'>
        <div>
            <Left />
        </div>
        <div>
            <Right />
        </div>
    </div>
  )
}
