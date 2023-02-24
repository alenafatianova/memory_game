import React, { FC } from 'react'
import { ICardProp } from '../types'
import './Card.css'


interface ICard {
    chooseCard: (card: ICardProp) => void
    card: ICardProp
    flipped: boolean
    disabledCards: boolean
}

export const Card: FC<ICard> = ({ chooseCard, card, flipped, disabledCards }) => {

    const onCardClick = () => {
        !disabledCards &&  chooseCard(card)
    }
  
  return (
         <div key={card.id} className='card'>
                <div className={flipped ? 'flipped_card' : ''}>
                    <img src={card.image} className={disabledCards ? 'disabled_cards' : 'front_side_img'} alt="Картинка технологии" />
                    <div className='back_side' onClick={onCardClick}>k/c</div>
                </div>
            </div>
  )
}
