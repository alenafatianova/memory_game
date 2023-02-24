import React, { FC } from 'react'
import './Tries.css'

interface ITries {
    tries: number
}

export const Tries: FC<ITries> = ({ tries }) => {
  return (
    <div className='tries_counter'>{`Осталось попыток ${tries}`}</div>
  )
}
