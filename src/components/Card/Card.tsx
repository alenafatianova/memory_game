import React, { FC } from 'react'
import { ICardProp } from '../types'
import './Card.css'

export enum cardState {
    frontSide = 'front_side_img',
    backSide = 'back_side',
    disabledCard = 'disabled_card'
}
interface ICard {
    chooseCard: (card: ICardProp) => void
    card: ICardProp
    state: cardState
}

export const Card: FC<ICard> = ({ chooseCard, card, state }) => {
  return (
         <div key={card.id} className='card' onClick={() => cardState.backSide ? chooseCard(card) : null}>
                <div className={state}>
                    { state === cardState.frontSide ? <img src={card.image} alt="Картинка технологии" /> : 'k/c' }
                </div>
            </div>
  )
}
