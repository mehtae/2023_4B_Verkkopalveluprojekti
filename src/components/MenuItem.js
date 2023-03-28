import React from 'react'

function MenuItem({image, name, CoursePrice}) {
  return (
    <div className='menuItem'>
        <div style ={{backgroundImage: 'url(${image})'}}></div>
        <h1>{name}</h1>
        <p>€{CoursePrice}</p>
    </div>
  )
}

export default MenuItem