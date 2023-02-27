import React, { FC } from 'react'
import { Card, cardState } from '../Card/Card'
import './Cards.css'
import { ICardProp } from '../types'
import { cardsData } from '../data'

interface ICards {
  chooseCard: (card: ICardProp) => void
  chosenCardsIds: number[]
  disabledCards: Set<number>
}

export const Cards: FC<ICards> = ({ chooseCard, chosenCardsIds, disabledCards }) => {
  return (
    <div className='cards_container'>
      {cardsData.map((card) => (
        <Card 
        card={card} 
        key={card.id} 
        chooseCard={chooseCard} 
        state={disabledCards.has(card.id) ? cardState.disabledCard : chosenCardsIds.includes(card.id) ? cardState.frontSide : cardState.backSide}
       />
      ))
    }
      
    </div>
  )
}
