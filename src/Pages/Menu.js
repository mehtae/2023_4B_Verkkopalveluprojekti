import React from 'react'
import { MenuList } from "../helpers/CourseList.js"
import MenuItem from '../components/MenuItem.js'
import "../styles/menu.css"

function Menu() {
  return (
    <div className="menu">
        <h1 className='menuTitle'>Courses</h1>
        <div className="menuList">{MenuList.map((menuItem, key)=> {return<MenuItem 
        key={key}
        image={menuItem.image}
        name={menuItem.name}
        CoursePrice={menuItem.CoursePrice}
        />
        })} 
        </div>
    </div>
  )
}

export default Menu;