import React from 'react'

const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
  const headertIcon = alreadyFavorite ? '💖' : '🤍'

  return (
    <div className="main-card">
      <img src={img} alt="고양이" width="400" />
      <button onClick={onHeartClick}>{headertIcon}</button>
    </div>
  )
}

export default MainCard
