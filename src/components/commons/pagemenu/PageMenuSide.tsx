import React, { ReactElement } from 'react'
import PageMenuSideItem from './PageMenuSideItem'
import PageMenuSideItems from './PageMenuSideItems'

import './PageMenuSide.css'

export interface PageMenuSideProperties {
  collapsed: boolean
  title?: string
  items: PageMenuSideItems[]
  onItemClick: (id: string) => void
}

export interface PageMenuSideItems {
  id: string
  icon?: ReactElement
  selected: boolean
  text: string
}

const PageMenuSide = ({
  collapsed,
  title,
  items,
  onItemClick,
}: PageMenuSideProperties) => {

  // Events //

  const handleItemClicked = (id: string) => {
    onItemClick(id)
  }

  // Rendering //

  return (
    <div className='page-menu-side'>

      {title ?
        <h1 className='page-menu-side__title'>
          {title}
        </h1>
        : null}

      <PageMenuSideItems>
        {items.map((item) => {
          return (
            <PageMenuSideItem
              key={item.id}
              collapsed={collapsed}
              {...item}
              onClick={() => handleItemClicked(item.id)}
            />
          )
        })}
      </PageMenuSideItems>

    </div>
  )
}

export default PageMenuSide