import React from 'react'

const CatItem = ({ img }) => {
  return (
    <li>
      <img src={img} alt="" style={{ width: '150px' }} />
    </li>
  )
}

export default CatItem
