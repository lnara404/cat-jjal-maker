import React from 'react'
import { includesHangul } from '../utils/utils'

const ControlForm = ({ updateMainCat }) => {
  const [value, setValue] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

  const handleInputChange = (e) => {
    const userValue = e.target.value

    setErrorMessage('')

    if (includesHangul(userValue)) {
      setErrorMessage('한글을 입력할 수 없습니다.')
    }
    setValue(userValue.toUpperCase())
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (value === '') {
      setErrorMessage('빈 값을 전송할 수 없습니다.')
      return
    }

    updateMainCat(value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="영어 대사를 입력해주세요"
        value={value}
        onChange={handleInputChange}
      />
      <button type="submit">생성</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  )
}

export default ControlForm
