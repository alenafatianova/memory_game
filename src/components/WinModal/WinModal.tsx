import React from 'react'

export const WinModal = () => {
  return (
    <div>
          <div className='modal_body'>
            <span className='title_one'>Увы, вы проиграли</span>
            <span className='title_two'>У вас кончились ходы</span>

            <button className='reset_game_btn'>Сыграть еще</button>
        </div>
    </div>
  )
}
