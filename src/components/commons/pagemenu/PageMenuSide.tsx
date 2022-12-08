import React, { ReactElement, ReactNode } from 'react'
import PageMenuSideItem, { PageMenuSideItemProperties } from './PageMenuSideItem'

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
        <h1>{title}</h1>
        : null}

      <ul className='page-menu-side-items'>
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
      </ul>

    </div>
  )
}

export default PageMenuSide