import React, { FC } from 'react'
import { ICardProp } from '../types'
import './Card.css'

export enum State {
    Front = "front_side_card",
    Back = "back_side_card",
    Disabled = "disabled_card",
  }

interface ICard {
    card: ICardProp
    state: State,
    chooseCard: (card: ICardProp) => void
}

export const Card: FC<ICard> = ({ card, state, chooseCard }) => {
  return (
        <div className={state} onClick = {() => state === State.Back ? chooseCard(card): null}>
            {state === State.Front ? <img src={card.image} alt="Картинка технологии" /> : null}
        </div>
  )
}
