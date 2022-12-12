import React, { ReactNode } from 'react'

import './PageMenuSideItems.css'

interface PageMenuSideItemsProperties {
  children: ReactNode
}

const PageMenuSideItems = ({
  children,
}: PageMenuSideItemsProperties) => {

  // Rendering //

  return (
    <ul className='page-menu-side-items'>
      {children}
    </ul>
  )
}

export default PageMenuSideItems