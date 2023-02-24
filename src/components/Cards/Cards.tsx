import React, { FC } from 'react'
import { Card } from '../Card/Card'
import './Cards.css'
import { ICardProp } from '../types'

interface ICards {
  chooseCard: (card: ICardProp) => void
  cards: ICardProp[]
  firstChosenCard: ICardProp
  secondChosenCard: ICardProp
  disabledCards: boolean
}

export const Cards: FC<ICards> = ({ chooseCard, cards, firstChosenCard, secondChosenCard, disabledCards }) => {

  
  return (
    <div className='cards_container'>
      {cards.map((card) => (
        <Card 
          card={card} 
          key={card.id} 
          chooseCard={chooseCard} 
          disabledCards={disabledCards}
          flipped={card === firstChosenCard || card === secondChosenCard || card.matched === true} />
      ))}
      
    </div>
  )
}
