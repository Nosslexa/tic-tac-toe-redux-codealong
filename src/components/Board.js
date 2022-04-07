import React from 'react'
import { useSelector } from 'react-redux'
import { Square } from 'components/Square'

export const Board = () => {
  // TODO - use the 'squares' state from the game reducer to render the squares
  const squares = useSelector((store) => (store.game.squares))

  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square key={index} value={value} index={index} />
      ))}
    </div>
  )
}
