import React, { StrictMode, useEffect, useState } from 'react'
import { Cards } from '../Cards/Cards'
import { GameOverModal } from '../GameOverModal/GameOverModal'
import { Movement } from '../Movement/Movement'
import { Tries } from '../Tries/Tries'
import { ICardProp } from '../types'
import './App.css'

export const App = () => {

  const tries = 40
  const [click, setClick] = useState(0)
  const [disabledCards, setDisabledCards] = useState<Set<number>>(new Set())
  const [chosenCards, setChosenCards] = useState<ICardProp[]>([])
  const chosenCardsIds = chosenCards.map(card => card.id)
  const bothChoosenCards = chosenCards[0] && chosenCards[1]
  

  // функция выбора карточки
  const chooseCard = (card: ICardProp) => {
    setClick(click+1)
    setChosenCards([...chosenCards, card])
  }

  // сброс текущих карточек, сброс счетчиков хода и попыток
  const onReset = () => {
    setClick(0)
    setDisabledCards(new Set())
    resetTurn()
 }

 const resetTurn = () => {
  setChosenCards([])
 }

 useEffect(() => {
  if (bothChoosenCards) {
    setTimeout(() => {
      if (chosenCards[0].image === chosenCards[1].image) {
        setDisabledCards(new Set([...disabledCards, ...chosenCardsIds]))
      }
      resetTurn()
    }, 1000)
  }
 }, [bothChoosenCards])

  return (
    <div>
        <h2 className='header_name'>Memory</h2>
       <div className='container'>
        <Movement click={click}  />
      {/* @ts-ignore */}
        <Cards disabledCards={disabledCards} chooseCard={chooseCard} chosenCardsIds={chosenCardsIds} />
        <Tries tries={tries - click} />
        {click === 40 && <GameOverModal onReset={onReset} /> }
       </div>
    </div>
  )
}
