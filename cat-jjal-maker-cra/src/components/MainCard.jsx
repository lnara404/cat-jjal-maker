import React from 'react'

const MainCard = ({ img, onHeartClick, alreadyFavorite }) => {
  const headertIcon = alreadyFavorite ? 'đ' : 'đ¤'

  return (
    <div className="main-card">
      <img src={img} alt="ęł ěě´" width="400" />
      <button onClick={onHeartClick}>{headertIcon}</button>
    </div>
  )
}

export default MainCard
