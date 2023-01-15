import React from 'react'
import CatItem from '../components/CatItem'

const Favorites = ({ favorites }) => {
  return (
    <ul className="favorites">
      {favorites.map((item, index) => (
        <CatItem img={item} key={index} />
      ))}
    </ul>
  )
}

export default Favorites
