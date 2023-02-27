import React, { StrictMode, useEffect, useState } from 'react'
import { Cards } from '../Cards/Cards'
import { cardsData } from '../data'
import { GameOverModal } from '../GameOverModal/GameOverModal'
import { ModalWin } from '../ModalWin/ModalWin'
import { Movement } from '../Movement/Movement'
import { Tries } from '../Tries/Tries'
import { ICardProp } from '../types'
import './App.css'

export const App = () => {

  const [click, setClick] = useState(0)
  const [disabledCards, setDisabledCards] = useState<Set<number>>(new Set())
  const [chosenCards, setChosenCards] = useState<ICardProp[]>([])
  const bothChosenCards =  chosenCards[0] && chosenCards[1]
  const tries = 40
  const chosenCardsIds = chosenCards?.map(card => card.id)

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
  if (bothChosenCards) {
    setTimeout(() => {
      if(chosenCards[0].image === chosenCards[1].image) {
        setDisabledCards(new Set([...disabledCards, ...chosenCardsIds]))
      }
      resetTurn()
    }, 1000)
  }
  
 }, [bothChosenCards])

 console.log('disabledCards: ', disabledCards.size)

  return (
    <div>
        <h2 className='header_name'>Memory</h2>
       <div className='container'>
        <Movement click={click}  />
        <Cards disabledCards={disabledCards} chooseCard={chooseCard}  chosenCardsIds={chosenCardsIds} />
        <Tries tries={tries - click} />
        {click === 40 && <GameOverModal onReset={onReset} /> }
        { disabledCards.size === 16 && <ModalWin click={click}  onReset={onReset} /> }
       </div>
    </div>
  )
}
