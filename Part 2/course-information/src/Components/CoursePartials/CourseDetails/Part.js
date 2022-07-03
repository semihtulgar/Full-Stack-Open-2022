import React from 'react'

function Part({part}) {
  return (
    <>
        <li>{part.name} {part.exercises}</li>
    </>
  )
}

export default Part