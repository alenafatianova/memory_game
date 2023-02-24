import React, { StrictMode, useEffect, useState } from 'react'
import { Cards } from '../Cards/Cards'
import { cardsData } from '../data'
import { GameOverModal } from '../GameOverModal/GameOverModal'
import { Movement } from '../Movement/Movement'
import { Tries } from '../Tries/Tries'
import { ICardProp } from '../types'
import './App.css'

export const App = () => {


  const [cards, setCards] = useState<ICardProp[] | []>(cardsData)
  const [click, setClick] = useState(0)
  const [disabledCards, setDisabledCards] = useState<boolean>(false)
  const flipped: boolean = false
  const tries = 40
  const [firstChosenCard, setFirstChosenCard] = useState<ICardProp | null>(null)
  const [secondChosenCard, setSecondChosenCard] = useState<ICardProp | null>(null)
  const bothChoosenCards = firstChosenCard && secondChosenCard
  

  // функция выбора карточки
  const chooseCard = (card: ICardProp) => {
    setClick(click+1)
    firstChosenCard ? setSecondChosenCard(card) : setFirstChosenCard(card)
  }

  // сброс текущих карточек, сброс счетчиков хода и попыток
  const onReset = () => {
    setClick(0)
    resetTurn()
 }

 const resetTurn = () => {
  setFirstChosenCard(null)
  setSecondChosenCard(null)
  setDisabledCards(false)
 }

 useEffect(() => {
  if (bothChoosenCards) {
    if (firstChosenCard.image === secondChosenCard.image) {
      setDisabledCards(true)
     setCards(prevCards => {
      return prevCards.map((card => {
        if (card.image === firstChosenCard.image) {
            return {...card, matched: true}
        } else {
          return card
        }
      }))
     })
    } else {
    }
    setTimeout(() => resetTurn(), 1000)
    
  }
 }, [bothChoosenCards])

  return (
    <div>
        <h2 className='header_name'>Memory</h2>
       <div className='container'>
        <Movement click={click}  />
      {/* @ts-ignore */}
        <Cards disabledCards={disabledCards} chooseCard={chooseCard} cards={cards} flipped={flipped} firstChosenCard={firstChosenCard} secondChosenCard={secondChosenCard} />
        <Tries tries={tries - click} />
        {click === 40 && <GameOverModal onReset={onReset} /> }
       </div>
    </div>
  )
}
