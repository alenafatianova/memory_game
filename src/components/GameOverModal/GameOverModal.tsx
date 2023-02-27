import React, { FC } from 'react'
import './GameOverModal.css'

interface IModal {
    onReset: () => void
}
export const GameOverModal: FC<IModal> = ({ onReset }) => {
  return (
    <div className='modal_container' onClick={(e) => e.preventDefault()}>
        <div className='modal_body'>
            <span className='title_one'>Увы, вы проиграли</span>
            <span className='title_two'>У вас кончились ходы</span>

            <button className='reset_game_btn' onClick={onReset}>Сыграть еще</button>
        </div>
    </div>
  )
}
