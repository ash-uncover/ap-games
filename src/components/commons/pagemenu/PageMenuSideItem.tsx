import React, { MouseEvent, ReactElement } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

  const classes = ['page-side-menu-item']
  if (selected) {
    classes.push('selected')
  }

  return (
    <li
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <a
        role='button'
        onClick={() => false}
      >
        {icon ?
          <span style={{ marginRight: '0.55rem' }}>
            {icon ? icon : null}
          </span>
        :null}
        <span>
          {collapsed ? null : text}
        </span>
      </a>
    </li>
  )
}

export default PageMenuSideItem