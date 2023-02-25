import React, { FC } from 'react'
import { Card, State } from '../Card/Card'
import './Cards.css'
import { ICardProp } from '../types'
import { cards } from '../data'

interface ICards {
  chooseCard: (card: ICardProp) => void
  chosenCardsIds: number[]
  disabledCards: Set<number>
}

export const Cards: FC<ICards> = ({ chooseCard, chosenCardsIds, disabledCards }) => {
  return (
    <div className='cards_container'>
      {cards.map((card) => (
        <Card 
          key={card.id}
          card = {card}
          state = {disabledCards.has(card.id) ? State.Disabled : chosenCardsIds?.includes(card.id) ? State.Front : State.Back}
          chooseCard={chooseCard}
           />
      ))}
      
    </div>
  )
}
