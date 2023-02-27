import React, { FC } from 'react'
import './ModalWin.css'

interface IWinModal {
    onReset: () => void
    click: number
}

export const ModalWin: FC<IWinModal> = ({onReset, click}) => {
  return (
    <div className='modal_container' onClick={(e) => e.preventDefault()}>
        <div className='modal_body'>
            <span className='title_one'>Ура, вы выиграли!</span>
            <span className='title_two'>{`Это заняло ${click} ходов`}</span>

            <button className='reset_game_btn' onClick={onReset}>Сыграть еще</button>
        </div>
    </div>
  )
}
