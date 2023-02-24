import React, { FC } from 'react'
import './Movement.css'

interface IMovememnt {
    click: number
}

export const Movement: FC<IMovememnt> = ({ click }) => {
  return (
    <div className='movements_counter'>{`Сделано ходов ${click}`}</div>
  )
}
