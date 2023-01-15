import React, { useState, useEffect } from 'react'
import './App.css'
import Title from './components/Title'
import ControlForm from './components/ControlForm'
import MainCard from './components/MainCard'
import Favorites from './components/Favorites'

import { jsonLocalStorage, fetchCat } from './utils/utils'

function App() {
  const CAT1 = 'https://cataas.com/cat/HSENVDU4ZMqy7KQ0/says/react'

  const [counter, setCounter] = useState(() => {
    return jsonLocalStorage.getItem('counter')
  })
  const [mainImage, setMainImage] = useState(CAT1)
  const [favorites, setFavorites] = useState(() => {
    return jsonLocalStorage.getItem('favorites') || []
  })

  const alreadyFavorite = favorites.includes(mainImage)

  const setInitialCat = async () => {
    const initalCat = await fetchCat('First Cat')

    setMainImage(initalCat)
  }

  useEffect(() => {
    setInitialCat()
  }, [])

  const updateMainCat = async (value) => {
    const newCat = await fetchCat(value)
    setMainImage(newCat)

    setCounter((prev) => {
      const nextCounter = prev + 1

      jsonLocalStorage.setItem('counter', nextCounter)

      return nextCounter
    })
  }

  const handleHeartClick = () => {
    const nextFavorites = [...favorites, mainImage]

    setFavorites(nextFavorites)
    jsonLocalStorage.setItem('favorites', nextFavorites)
  }

  const counterTitle = counter === null ? '' : `${counter}번째 `

  return (
    <div>
      <Title>{counterTitle}고양이 가라사대</Title>
      <ControlForm updateMainCat={updateMainCat} />
      <MainCard
        img={mainImage}
        onHeartClick={handleHeartClick}
        alreadyFavorite={alreadyFavorite}
      />
      <Favorites favorites={favorites} />
    </div>
  )
}

export default App
