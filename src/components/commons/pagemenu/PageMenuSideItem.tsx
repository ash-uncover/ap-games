import React, { MouseEvent, ReactElement } from 'react'

import './PageMenuSideItem.css'

export interface PageMenuSideItemProperties {
  collapsed: boolean
  icon?: ReactElement
  selected: boolean
  text: string
  onClick: () => void
}

const PageMenuSideItem = ({
  collapsed,
  icon,
  selected,
  text,
  onClick,
}: PageMenuSideItemProperties) => {

  // Events //

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()
    onClick()
    return false
  }

  // Rendering //

  const classes = ['page-menu-side-item']
  if (selected) {
    classes.push('selected')
  }

  return (
    <li
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <a
        className='page-menu-side-item__content'
        role='button'
        onClick={() => false}
      >
        {icon ?
          <span className='page-menu-side-item__icon'>
            {icon ? icon : null}
          </span>
        :null}
        <span className='page-menu-side-item__text'>
          {collapsed ? null : text}
        </span>
      </a>
    </li>
  )
}

export default PageMenuSideItem